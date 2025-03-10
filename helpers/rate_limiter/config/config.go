package config

import (
	"encoding/json"
	"fmt"
	"os"
	"reflect"
	"time"

	"github.com/sirupsen/logrus"
)

type RateLimitEntry struct {
	Host     string
	Limit    int
	Duration time.Duration
	Path     string
	Method   string
}

var Config = &struct {
	UseStructuredLogging bool
	RateLimit            []RateLimitEntry
	LogLevel             logrus.Level
	HeaderWithIp         string
	HeaderWithHost       string
	HeaderWithPath       string
	HeaderWithMethod     string
}{
	UseStructuredLogging: false,
	LogLevel:             logrus.InfoLevel,
	HeaderWithIp:         "X-Real-Ip",
	HeaderWithHost:       "X-Forwarded-Host",
	HeaderWithPath:       "X-Forwarded-Uri",
	HeaderWithMethod:     "X-Forwarded-Method",
}

func Init() {
	Config.UseStructuredLogging = os.Getenv("USE_STRUCTURED_LOGGING") == "true"

	if Config.UseStructuredLogging {
		logrus.SetFormatter(&logrus.JSONFormatter{})
	}

	if os.Getenv("LOG_LEVEL") != "" {
		logLevel, err := logrus.ParseLevel(os.Getenv("LOG_LEVEL"))
		if err != nil {
			logrus.WithError(err).Fatal("Failed to parse log level")
		}
		Config.LogLevel = logLevel
	}

	logrus.SetLevel(Config.LogLevel)

	if os.Getenv("RATE_LIMIT") != "" {
		err := parseRateLimiterConfig(os.Getenv("RATE_LIMIT"))
		if err != nil {
			logrus.WithError(err).Fatal("Failed to parse rate limiter config")
		}
	}

	if os.Getenv("HEADER_WITH_IP") != "" {
		Config.HeaderWithIp = os.Getenv("HEADER_WITH_IP")
	}

	if os.Getenv("HEADER_WITH_HOST") != "" {
		Config.HeaderWithHost = os.Getenv("HEADER_WITH_HOST")
	}

	if os.Getenv("HEADER_WITH_PATH") != "" {
		Config.HeaderWithPath = os.Getenv("HEADER_WITH_PATH")
	}

	if os.Getenv("HEADER_WITH_METHOD") != "" {
		Config.HeaderWithMethod = os.Getenv("HEADER_WITH_METHOD")
	}

	logConfig(Config)
}

func parseRateLimiterConfig(config string) error {
	rawRateLimiterConfig := []struct {
		Host     string `json:"host"`
		Limit    int    `json:"limit"`
		Duration string `json:"duration"`
		Path     string `json:"path"`
		Method   string `json:"method"`
	}{}

	err := json.Unmarshal([]byte(config), &rawRateLimiterConfig)
	if err != nil {
		return err
	}

	for rawConfigIndex, rawConfig := range rawRateLimiterConfig {
		duration, err := time.ParseDuration(rawConfig.Duration)
		if err != nil {
			return fmt.Errorf("failed to parse duration of RATE_LIMIT[%d]: %w", rawConfigIndex, err)
		}

		Config.RateLimit = append(Config.RateLimit, RateLimitEntry{
			Host:     rawConfig.Host,
			Limit:    rawConfig.Limit,
			Duration: duration,
			Path:     rawConfig.Path,
			Method:   rawConfig.Method,
		})
	}

	return nil
}

func logConfig(config interface{}) {
	logFields := logrus.Fields{}
	val := reflect.ValueOf(config).Elem()

	logrus.Info("Config initialized")

	for i := range val.NumField() {
		fieldName := val.Type().Field(i).Name
		fieldValue := val.Field(i).Interface()

		logFields[fieldName] = fieldValue
		logrus.Info(fieldName, ": ", fieldValue)
	}
}
