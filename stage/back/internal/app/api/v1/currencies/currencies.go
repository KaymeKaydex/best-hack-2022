package currencies

import (
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

// Currencies godoc
// @Description You can get a student pass, as well as his vaccination status and university position
// @Tags Currencies
// @Produce json
// @Router /currencies/*addr [get]
func (c *Controller) Currencies(ctx *gin.Context) {
	const cbAddr = "https://www.cbr-xml-daily.ru"

	addr := cbAddr + ctx.Param("path")

	logrus.Debugf("proxy addr is %s", addr)

	resp, err := http.Get(addr)
	if err != nil {
		ctx.AbortWithStatus(http.StatusInternalServerError)
	}

	bts, err := io.ReadAll(resp.Body)
	if err != nil {
		logrus.WithError(err).Error("cant read resp body")

		ctx.AbortWithStatus(http.StatusInternalServerError)
	}

	ctx.Data(http.StatusOK, gin.MIMEJSON, bts)
}
