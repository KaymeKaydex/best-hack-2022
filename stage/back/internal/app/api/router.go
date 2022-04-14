package api

import (
	"context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"

	"github.com/KaymeKaydex/best-hack-2022/docs"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/api/v1/currencies"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth/delivery"
)

// IService - интерфейс сервиса, который требует роутер
type IService interface{}

// Router a.k. роутер является управляющей структурой всех открывающихся сокетов
// и инициализирующихся эндпоинтов
type Router struct {
	r           *gin.Engine
	authUseCase auth.UseCase

	Service IService
}

func NewRouter(ctx context.Context, service IService, r *gin.Engine, authUseCase auth.UseCase) (*Router, error) {
	if service == nil {
		log.WithContext(ctx).Error("service cant be nil")

		return nil, fmt.Errorf("service cant be nil")
	}

	return &Router{
		r:           r,
		authUseCase: authUseCase,
		Service:     service,
	}, nil
}

// nolint: funlen
func (rtr *Router) InitAPIRoutes(ctx context.Context) error {
	r := rtr.r

	// api.Use(mw.AuthMiddleware())
	currenciesController, err := currencies.New()
	if err != nil {
		return err
	}

	r.GET("/currencies/*path", currenciesController.Currencies)

	return nil
}

func (rtr *Router) InitAuthRouter(ctx context.Context) {
	r := rtr.r

	auth := r.Group("/auth")
	delivery.RegisterAuthHTTPEndpoints(auth, rtr.authUseCase)
}

func (rtr *Router) InitSystemRoutes(ctx context.Context) error {
	r := rtr.r
	cfg := config.FromContext(ctx)

	// init swagger
	{
		docs.SwaggerInfo.Host = cfg.ServiceHost
		if docs.SwaggerInfo.Host == "0.0.0.0" { // local
			docs.SwaggerInfo.Schemes = []string{"http"}
		}
		url := ginSwagger.URL("/swagger/doc.json") // The url pointing to API definition
		r.GET("/swagger/*any", func(c *gin.Context) {
			// fix for /swagger/
			if c.Request.URL.Path == "/swagger/" {
				c.Request.URL.Path = "/swagger/index.html"
				c.Request.RequestURI = "/swagger/index.html"
			}
			ginSwagger.WrapHandler(swaggerFiles.Handler, url)(c)
		})
	}

	// init healthcheck
	{
		r.GET("/", func(c *gin.Context) {
			c.Redirect(http.StatusPermanentRedirect, "/swagger/")
		})

		r.GET("/version", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"version":   cfg.AppVersion,
				"log_level": cfg.LogLevel,
			})
		})
		r.GET("/ready", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"ready": true,
			})
		})
		r.GET("/live", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"live": true,
			})
		})
	}

	return nil
}
