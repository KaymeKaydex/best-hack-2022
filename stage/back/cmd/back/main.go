package main

import (
	"context"
	"os"

	log "github.com/sirupsen/logrus"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/app"
)

// GitHash Коммит при сборке (версия текущего процесса)
var GitHash string

// @title Best Hack Stage API
// @version 1.0
// @description est Hack Stage API
// @termsOfService https://quedafoe.ru

// @contact.name API Support
// @contact.url https://vk.com/abmanyl
// @contact.email djassange@yandex.ru

// @license.name Not for public use

// @host quedafoe.ru
// @schemes https http
// @BasePath /
func init() {
	// Log as JSON instead of the default ASCII formatter.
	log.SetFormatter(&log.JSONFormatter{})

	// Output to stdout instead of the default stderr
	// Can be any io.Writer, see below for File example
	log.SetOutput(os.Stdout)

	// Only log the warning severity or above.
	log.SetLevel(log.DebugLevel)
}

func main() {
	ctx := context.Background()

	cfg, err := config.NewConfig(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("cant init config")

		os.Exit(2)
	}
	cfg.AppVersion = GitHash

	ctx = config.WrapContext(ctx, cfg)

	application, err := app.New(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("cant create application")

		os.Exit(2)
	}

	err = application.Run(ctx)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("cant run application")

		os.Exit(2)
	}

	log.WithContext(ctx).Info("application closed")
}
