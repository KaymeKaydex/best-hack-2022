package mw

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	log "github.com/sirupsen/logrus"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/models"
)

// WithAuthorize авторизовывает пользователя по JWT
func WithAuthorize(cfg *config.Config) gin.HandlerFunc {
	return func(gCtx *gin.Context) {
		ctx := gCtx.Request.Context()

		token := gCtx.Request.Header.Get("Authorization")

		tokenParts := strings.Split(token, " ")

		if tokenParts[0] != "Bearer" {
			gCtx.Status(http.StatusForbidden)

			return
		}

		rawToken := tokenParts[1]

		// if token header is empty we must return err
		if rawToken == "" {
			log.Error(ctx, "no Authorization provided")

			gCtx.Status(http.StatusForbidden)

			return
		}

		// parse jwt string
		claims := jwt.MapClaims{}
		_, err := jwt.ParseWithClaims(rawToken, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(cfg.JWT.SecretKeyJWT), nil
		})
		if err != nil {
			gCtx.AbortWithStatus(http.StatusForbidden)

			return
		}

		// get user uuid interface
		iUserLogin, exists := claims["jti"]
		if !exists {
			gCtx.Status(http.StatusInternalServerError)

			return
		}

		// convert iUserUUID to string
		userLogin, ok := iUserLogin.(string)
		if !ok {
			gCtx.Status(http.StatusInternalServerError)

			return
		}

		gCtx.Set(models.UserLoginCtxKey, userLogin)

		gCtx.Next()
	}
}
