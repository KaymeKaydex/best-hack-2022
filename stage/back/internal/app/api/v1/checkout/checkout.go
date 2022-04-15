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
	amount uint64
}

type topUpResp struct {
	amount uint64
}

func (c *Controller) TopUp(ctx *gin.Context) {
	req := topUpReq{}

	err := ctx.BindJSON(&req)
	if err != nil {
		ctx.Status(http.StatusBadRequest)
		return
	}

	login, exists := ctx.Get(models.UserLoginCtxKey)
	if !exists {
		ctx.Status(http.StatusForbidden)
		return
	}

	loginStr := login.(string)

	amount, err := c.srv.AddPacketsAmount(ctx, loginStr, req.amount)
	if err != nil {
		ctx.Status(http.StatusInternalServerError)
		return
	}

	ctx.JSON(http.StatusOK, &topUpResp{amount: amount})
}
