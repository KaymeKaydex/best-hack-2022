package currencies

import (
	"fmt"
	"net/http"
	"strings"

	xj "github.com/basgys/goxml2json"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type dailyReq struct {
	Day   int `form:"day"`
	Month int `form:"month"`
	Year  int `form:"year"`
}

// Daily godoc
// @Description You can get a student pass, as well as his vaccination status and university position
// @Tags Currencies
// @Produce json
// @Param 	day   query 	 int 	true "Day"
// @Param 	month   query 	 int 	true "Month"
// @Param 	year   query 	 int 	true "Year"
// @Router /currencies/daily [get]
func (c *Controller) Daily(ctx *gin.Context) {
	const cbAddr = "http://www.cbr.ru"
	req := dailyReq{}

	err := ctx.ShouldBind(&req)
	if err != nil {
		ctx.AbortWithStatus(http.StatusBadRequest)
	}

	addr := cbAddr + ctx.Param("path") + "?" + ctx.Request.URL.RawQuery
	logrus.Debug(addr)
	resp, err := http.Get(addr)
	if err != nil {
		ctx.AbortWithStatus(http.StatusInternalServerError)
	}

	json, err := xj.Convert(resp.Body)
	if err != nil {
		logrus.WithError(err).Error("smth went wrong")
		ctx.AbortWithStatus(http.StatusInternalServerError)
	}

	logrus.Debug(json.String())

	s := json.String()
	s = strings.ReplaceAll(s, "\\\"", "\"")

	fmt.Println(s)
	ctx.JSON(http.StatusOK, &s)
}
