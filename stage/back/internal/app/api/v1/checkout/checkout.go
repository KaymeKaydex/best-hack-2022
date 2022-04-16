package checkout

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/models"
)

// Currencies godoc
// @Description You can get a student pass, as well as his vaccination status and university position
// @Tags Currencies
// @Produce json
// @Router /checkout/top_up [post]

type topUpReq struct {
	Amount uint64
}

type topUpResp struct {
	Amount uint64
}

func (c *Controller) TopUp(gCtx *gin.Context) {
	req := topUpReq{}
	ctx := gCtx.Request.Context()

	err := gCtx.BindJSON(&req)
	if err != nil {
		gCtx.Status(http.StatusBadRequest)
		return
	}

	login := gCtx.Keys[models.UserLoginCtxKey]

	if login == nil {
		gCtx.Status(http.StatusForbidden)
		return
	}
	loginStr := login.(string)

	amount, err := c.srv.AddPacketsAmount(ctx, loginStr, req.Amount)
	if err != nil {
		gCtx.Status(http.StatusInternalServerError)
		return
	}

	gCtx.JSON(http.StatusOK, &topUpResp{Amount: amount})
}
