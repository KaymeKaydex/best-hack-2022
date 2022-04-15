package checkout

import (
	"context"
)

type ICheckoutService interface {
	AddPacketsAmount(ctx context.Context, login string, amount uint64) (uint64, error)
}

type Controller struct {
	srv ICheckoutService
}

func New(srv ICheckoutService) (*Controller, error) {
	return &Controller{
		srv: srv,
	}, nil
}
