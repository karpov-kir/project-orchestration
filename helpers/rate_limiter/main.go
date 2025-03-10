package main

import (
	"context"
	"net/http"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/karpov-kir/project-orchestration/helpers/rate-limiter/config"
	"github.com/sethvargo/go-limiter"
	"github.com/sethvargo/go-limiter/memorystore"
	"github.com/sirupsen/logrus"
)

type tokenLimiter struct {
	store      limiter.Store
	lastAccess time.Time
}

// Per route
var tokenLimiterMap map[string]tokenLimiter = make(map[string]tokenLimiter)

func RateLimitingHandler(c *fiber.Ctx) error {
	requestToken := getRequestToken(c)
	routeToken := getRouteTokenFromFiber(c)

	logWithFields := logrus.WithFields(logrus.Fields{
		"routeToken":   routeToken,
		"requestToken": requestToken,
	})

	logWithFields.WithField("headers", c.GetReqHeaders()).Debug("")

	tokenLimiter, ok := tokenLimiterMap[routeToken]
	if !ok {
		logWithFields.Error("Failed to get token limiter")
		return c.SendStatus(http.StatusOK)
	}

	_, remainingTokens, _, ok, err := tokenLimiter.store.Take(context.Background(), requestToken)
	if err != nil {
		logWithFields.WithError(err).Error("Failed to take token")
		return c.SendStatus(http.StatusOK)
	}

	logWithFields.WithFields(logrus.Fields{
		"remainingTokens": remainingTokens,
		"ok":              ok,
	}).Debug("")

	if !ok {
		return c.SendStatus(http.StatusTooManyRequests)
	}

	return c.SendStatus(http.StatusOK)
}

func main() {
	config.Init()
	initTokenLimiters()

	app := fiber.New()
	app.Use(logrusMiddleware())
	app.Get("/", RateLimitingHandler)
	logrus.Fatal(app.Listen(":3050"))
}

func logrusMiddleware() fiber.Handler {
	return func(c *fiber.Ctx) error {
		start := time.Now()
		err := c.Next()
		duration := time.Since(start)
		status := c.Response().StatusCode()
		logWithFields := logrus.WithFields(logrus.Fields{
			"status":       status,
			"method":       c.Method(),
			"path":         c.Path(),
			"duration":     duration,
			"requestToken": getRequestToken(c),
			"routeToken":   getRouteTokenFromFiber(c),
		})

		if err != nil {
			logWithFields.WithField("error", err).Error("")
		} else if status >= 400 {
			logWithFields.Error("")
		} else {
			logWithFields.Info("")
		}

		return err
	}
}

func getRouteTokenFromConfig(method string, host string, path string) string {
	return method + "_" + host + "_" + path
}

func getRouteTokenFromFiber(c *fiber.Ctx) string {
	path := c.Get(config.Config.HeaderWithPath)
	if idx := strings.Index(path, "?"); idx != -1 {
		path = path[:idx]
	}

	return c.Get(config.Config.HeaderWithMethod) + "_" + c.Get(config.Config.HeaderWithHost) + "_" + path
}

func getRequestToken(c *fiber.Ctx) string {
	return getRouteTokenFromFiber(c) + "_" + c.Get(config.Config.HeaderWithIp)
}

func initTokenLimiters() {
	for _, rateLimitEntry := range config.Config.RateLimit {
		store, err := memorystore.New(&memorystore.Config{
			Tokens:   uint64(rateLimitEntry.Limit),
			Interval: rateLimitEntry.Duration,
		})

		if err != nil {
			logrus.Fatalf("failed to create memorystore: %v", err)
		}

		routeToken := getRouteTokenFromConfig(rateLimitEntry.Method, rateLimitEntry.Host, rateLimitEntry.Path)
		newTokenLimiter := tokenLimiter{
			store:      store,
			lastAccess: time.Now(),
		}
		tokenLimiterMap[routeToken] = newTokenLimiter
	}
}
