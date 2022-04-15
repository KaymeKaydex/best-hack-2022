package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type signInReq struct {
	Login string
	Pass  string
}

type signInResp struct {
	JWT string `json:"jwt"`
}

func (c *Controller) SignIn(gCtx *gin.Context) {
	ctx := gCtx.Request.Context()
	req := signInReq{}

	err := gCtx.BindJSON(&req)
	if err != nil {
		gCtx.AbortWithStatus(http.StatusBadRequest)

		return
	}

	jwt, err := c.srv.SignIn(ctx, req.Login, req.Pass)
	if err != nil {
		gCtx.AbortWithStatus(http.StatusForbidden)

		return
	}

	gCtx.JSON(http.StatusOK, &signUpResp{JWT: jwt})
}
