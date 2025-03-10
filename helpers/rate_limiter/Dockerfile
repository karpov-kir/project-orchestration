FROM golang:1.24 AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o /rate-limiter

FROM alpine:3

COPY --from=builder /rate-limiter /rate-limiter

EXPOSE 3050

CMD ["/rate-limiter"]
