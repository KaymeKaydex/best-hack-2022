package auth

import (
	"context"
)

type IAuthService interface {
	SignUp(ctx context.Context, login, pass string) (string, error)
	SignIn(ctx context.Context, login, pass string) (string, error)
}

type Controller struct {
	srv IAuthService
}

func New(srv IAuthService) (*Controller, error) {
	return &Controller{
		srv: srv,
	}, nil
}
