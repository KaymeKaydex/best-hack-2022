package models

import (
	"time"
)

const UserLoginCtxKey = "ctx-user-login"

type User struct {
	Username    string `json:"username" bson:"_id" gorm:"column:login""`
	Password    string `json:"password" bson:"password" gorm:"-"`
	PacksAmount uint64 `json:"packs_amount" bson:"packs_amount" gorm:"column:amount"`
	FirstName   string
	MiddleName  string
	LastName    string
	CreatedAt   time.Time
}

func (User) TableName() string {
	return "users"
}
