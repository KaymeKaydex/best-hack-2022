package config

import (
	"context"

	log "github.com/sirupsen/logrus"
)

var configContextKey = struct{}{}

// Возвращает конфиг из конекста
func FromContext(ctx context.Context) *Config {
	cfgRaw := ctx.Value(configContextKey)
	cfg, ok := cfgRaw.(*Config)
	if ok {
		return cfg
	}
	log.WithContext(ctx).Warn("config FromContext executed, but no config in context")

	return nil
}

// Обогащает контекст конфигом
func WrapContext(ctx context.Context, cfg *Config) context.Context {
	log.Info("ctx wrapped config")
	return context.WithValue(ctx, configContextKey, cfg)
}
