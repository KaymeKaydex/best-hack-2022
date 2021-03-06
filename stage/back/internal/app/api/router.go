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
	"github.com/KaymeKaydex/best-hack-2022/internal/app/api/mw"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/api/v1/auth"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/api/v1/checkout"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/api/v1/currencies"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
)

// IService - интерфейс сервиса, который требует роутер
type IService interface {
	AddPacketsAmount(ctx context.Context, login string, amount uint64) (uint64, error)
	SignUp(ctx context.Context, login, pass string) (string, error)
	SignIn(ctx context.Context, login, pass string) (string, error)
}

// Router a.k. роутер является управляющей структурой всех открывающихся сокетов
// и инициализирующихся эндпоинтов
type Router struct {
	r       *gin.Engine
	Service IService
}

func NewRouter(ctx context.Context, service IService, r *gin.Engine) (*Router, error) {
	if service == nil {
		log.WithContext(ctx).Error("service cant be nil")

		return nil, fmt.Errorf("service cant be nil")
	}

	return &Router{
		r:       r,
		Service: service,
	}, nil
}

// nolint: funlen
func (rtr *Router) InitAPIRoutes(ctx context.Context) error {
	r := rtr.r

	r.Use(mw.ConfigCtx(config.FromContext(ctx)))

	// currencies
	{
		currenciesController, err := currencies.New()
		if err != nil {
			return err
		}

		r.GET("/currencies/*path", currenciesController.Currencies)
	}
	// auth
	{
		authContoller, err := auth.New(rtr.Service)
		if err != nil {
			return err
		}

		authGroup := r.Group("/auth")
		{
			authGroup.POST("/sign_in", authContoller.SignIn)
			authGroup.POST("/sign_up", authContoller.SignUp)
		}
	}
	// checkout
	{
		checkoutController, err := checkout.New(rtr.Service)
		if err != nil {
			return err
		}
		checkoutGroup := r.Group("/checkout")
		checkoutGroup.Use(mw.WithAuthorize(config.FromContext(ctx)))
		{
			checkoutGroup.POST("/pay", checkoutController.TopUp)
		}
	}
	return nil
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
