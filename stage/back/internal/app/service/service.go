package service

import (
	"context"
	"crypto/sha1"
	"encoding/hex"
	"time"

	"github.com/golang-jwt/jwt"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/models"
	"github.com/KaymeKaydex/best-hack-2022/internal/app/repository/mongo"
	postgresql "github.com/KaymeKaydex/best-hack-2022/internal/app/repository/postgresql"
)

type Service struct {
	repo     *mongo.Repository
	psqlRepo *postgresql.Repository
}

func (s *Service) MakeHashString(str string) string {
	h := sha1.New()

	h.Write([]byte(str))
	sha1Hash := hex.EncodeToString(h.Sum(nil))

	return sha1Hash
}

func (s *Service) SignIn(ctx context.Context, login, pass string) (string, error) {
	_, err := s.repo.Get(ctx, login, s.MakeHashString(pass))
	if err != nil {
		return "", err
	}

	rawJWT, err := createRawJWTByLogin(ctx, login)
	if err != nil {
		return "", err
	}

	return rawJWT, nil
}

func (s *Service) SignUp(ctx context.Context, login, pass string) (string, error) {
	err := s.repo.Insert(ctx,
		&models.User{
			Username: login,
			Password: s.MakeHashString(pass),
		})

	if err != nil {
		return "", err
	}

	err = s.psqlRepo.NewUser(ctx, models.User{Username: login, PacksAmount: 0})
	if err != nil {
		return "", err
	}

	rawJWT, err := createRawJWTByLogin(ctx, login)
	if err != nil {
		return "", err
	}

	return rawJWT, nil
}

func New(ctx context.Context, repo *mongo.Repository, psqlRepo *postgresql.Repository) (*Service, error) {
	return &Service{
		repo:     repo,
		psqlRepo: psqlRepo,
	}, nil
}

func createRawJWTByLogin(ctx context.Context, login string) (string, error) {
	cfg := config.FromContext(ctx)

	token := jwt.NewWithClaims(
		jwt.GetSigningMethod(cfg.JWT.SigningMethod),
		jwt.StandardClaims{
			Audience:  "",
			ExpiresAt: time.Now().AddDate(0, 0, cfg.JWT.HourLifeTime/24).Unix(), // time in seconds
			Id:        login,
			IssuedAt:  time.Now().Unix(),
			Issuer:    "quedafoe",
			NotBefore: 0,
			Subject:   "",
		})

	rawToken, err := token.SignedString([]byte(config.FromContext(ctx).JWT.SecretKeyJWT))
	if err != nil {
		return "", err
	}

	return rawToken, nil
}

func (s *Service) AddPacketsAmount(ctx context.Context, login string, amount uint64) (uint64, error) {
	return s.psqlRepo.AddPacks(ctx, login, amount)
}
