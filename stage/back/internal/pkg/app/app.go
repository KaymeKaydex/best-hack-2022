package app

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/api"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
)

type App struct {
	ctx context.Context

	cfg *config.Config
}

func New(ctx context.Context) (*App, error) {
	return &App{
		ctx: ctx,
		cfg: config.FromContext(ctx),
	}, nil
}

func (a *App) Run(ctx context.Context) error {
	var err error
	// init default gin router
	r := gin.Default()

	router, err := api.NewRouter(ctx, "", r)
	if err != nil {
		log.WithError(err).Error("cant create router")

		return err
	}

	err = router.InitAPIRoutes(ctx)
	if err != nil {
		log.WithError(err).Error("cant init api routes")

		return err
	}

	err = router.InitSystemRoutes(ctx)
	if err != nil {
		log.WithError(err).Error("cant init system routes")

		return err
	}

	addr := fmt.Sprintf("%s:%d", a.cfg.ServiceHost, a.cfg.ServicePort)
	log.WithContext(ctx).Info("App started at http://" + addr)

	return r.Run(addr)
}
