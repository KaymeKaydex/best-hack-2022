package models

const UserLoginCtxKey = "ctx-user-login"

type User struct {
	Username    string `json:"username" bson:"_id"`
	Password    string `json:"password" bson:"password"`
	PacksAmount uint64 `json:"packs_amount" bson:"packs_amount"`
}
