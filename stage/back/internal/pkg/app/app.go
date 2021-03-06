package app

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"

	_ "github.com/jinzhu/gorm/dialects/postgres"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/api"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/dsn"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/repository/mongo"
	repository "github.com/KaymeKaydex/best-hack-2022/internal/app/repository/postgresql"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/service"
)

type App struct {
	ctx    context.Context
	cfg    *config.Config
	router *api.Router
	r      *gin.Engine
}

func New(ctx context.Context) (*App, error) {

	// init default gin router
	r := gin.Default()

	repo := mongo.New(ctx)

	db, err := gorm.Open("postgres", dsn.FromEnv())
	if err != nil {
		log.WithError(err).Println("Cant open postgers connection")

		return nil, err
	}

	postgresqlRepo := repository.New(db)

	srv, err := service.New(ctx, repo, postgresqlRepo)
	if err != nil {
		return nil, err
	}

	router, err := api.NewRouter(ctx, srv, r)
	if err != nil {
		log.WithError(err).Error("cant create router")

		return nil, err
	}

	return &App{
		ctx:    ctx,
		cfg:    config.FromContext(ctx),
		router: router,
		r:      r,
	}, nil
}

func (a *App) Run(ctx context.Context) error {
	var err error

	router := a.router
	// router.InitAuthRouter(ctx)

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

	return a.r.Run(addr)
}
