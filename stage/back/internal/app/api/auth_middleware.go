package api

import (
	"net/http"
	"strings"

	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/auth"
	"github.com/KaymeKaydex/best-hack-2022/internal/pkg/parser"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func AuthMiddleware(c *gin.Context) func(c *gin.Context) {
	signKey := []byte(viper.GetString("auth.sign_key"))
	return func(c *gin.Context) {
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
