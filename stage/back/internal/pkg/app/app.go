package app

import (
	"context"
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/api"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	mongo2 "github.com/KaymeKaydex/best-hack-2022/internal/app/repository/mongo"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth/usecase"
)

type App struct {
	ctx context.Context

	cfg         *config.Config
	authUseCase auth.UseCase
}

func New(ctx context.Context) (*App, error) {
	db := initDB(ctx)

	userRepo := mongo2.New(db, viper.GetString("mongo.collection"))
	authUseCase := usecase.NewAuthorizer(
		userRepo,
		viper.GetString("auth.hash_salt"),
		[]byte(viper.GetString("auth.signing_key")),
		viper.GetDuration("auth.token_ttl")*time.Second,
	)

	return &App{
		ctx:         ctx,
		cfg:         config.FromContext(ctx),
		authUseCase: authUseCase,
	}, nil
}

func (a *App) Run(ctx context.Context) error {
	var err error
	// init default gin router
	r := gin.Default()

	router, err := api.NewRouter(ctx, "", r, a.authUseCase)
	if err != nil {
		log.WithError(err).Error("cant create router")

		return err
	}

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

	return r.Run(addr)
}

func initDB(ctx context.Context) *mongo.Database {
	cfg := config.FromContext(ctx).Mongo

	client, err := mongo.NewClient(options.Client().ApplyURI(cfg.URI))
	if err != nil {
		log.WithError(err).Fatal("Error occurred while establishing connection to mongoDB")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	return client.Database(cfg.Name)
}
