package repository

import (
	"context"

	"github.com/jinzhu/gorm"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/models"
)

type Repository struct {
	db *gorm.DB
}

func New(db *gorm.DB) *Repository {
	return &Repository{db: db}
}

func (r *Repository) NewUser(ctx context.Context, user models.User) error {
	return r.db.Create(user).Error
}

func (r *Repository) UpdateUser(user models.User) error {
	return r.db.Update(user).Error
}

func (r *Repository) AddPacks(ctx context.Context, login string, additionalAmount uint64) (uint64, error) {
	user := &models.User{Username: login}
	err := r.db.Model(user).
		UpdateColumn("amount", gorm.Expr("amount + ?", additionalAmount)).Error
	if err != nil {
		return 0, err
	}

	r.db.First(&user)

	return user.PacksAmount, nil
}
