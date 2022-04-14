package mw

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"

	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/parser"
)

func AuthMiddleware() func(c *gin.Context) {
	return func(c *gin.Context) {
		signKey := []byte(viper.GetString("auth.sign_key"))

		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		headerParts := strings.Split(authHeader, " ")
		if len(headerParts) != 2 {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		if headerParts[0] != "Bearer" {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		_, err := parser.ParseToken(headerParts[1], signKey)
		if err != nil {
			status := http.StatusBadRequest
			if err == auth.ErrInvalidAccessToken {
				status = http.StatusUnauthorized
			}

			c.AbortWithStatus(status)
			return
		}
	}
}
