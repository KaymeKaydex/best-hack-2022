package mw

import (
	"github.com/gin-gonic/gin"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
)

// ConfigCtx добавляет конфиг в контекст запроса
func ConfigCtx(cfg *config.Config) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.Request = ctx.Request.WithContext(config.WrapContext(ctx.Request.Context(), cfg))
		ctx.Next()
	}
}
