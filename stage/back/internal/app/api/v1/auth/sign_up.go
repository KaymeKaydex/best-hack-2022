package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type signUpReq struct {
	Login string `json:"login"`
	Pass  string `json:"pass"`
}

type signUpResp struct {
	JWT string `json:"jwt"`
}

func (c *Controller) SignUp(gCtx *gin.Context) {
	ctx := gCtx.Request.Context()
	req := signUpReq{}

	err := gCtx.BindJSON(&req)
	if err != nil {
		gCtx.AbortWithStatus(http.StatusBadRequest)

		return
	}

	jwt, err := c.srv.SignUp(ctx, req.Login, req.Pass)
	if err != nil {
		gCtx.AbortWithStatus(http.StatusInternalServerError)

		return
	}

	gCtx.JSON(http.StatusOK, &signUpResp{JWT: jwt})
}
