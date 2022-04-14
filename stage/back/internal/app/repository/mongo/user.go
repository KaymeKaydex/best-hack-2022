package mongo

import (
	"context"

	log "github.com/sirupsen/logrus"
	"github.com/zhashkevych/auth/pkg/auth"
	"github.com/zhashkevych/auth/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepository struct {
	db *mongo.Collection
}

func New(db *mongo.Database, collection string) *UserRepository {
	return &UserRepository{
		db: db.Collection(collection),
	}
}

func (r *UserRepository) Insert(ctx context.Context, user *models.User) error {
	_, err := r.db.InsertOne(ctx, user)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("error on inserting user")

		return auth.ErrUserAlreadyExists
	}

	return nil
}

func (r *UserRepository) Get(ctx context.Context, username, password string) (*models.User, error) {
	user := new(models.User)

	if err := r.db.FindOne(ctx, bson.M{"_id": username, "password": password}).Decode(user); err != nil {
		log.Errorf("error occured while getting user from db: %s", err.Error())
		if err == mongo.ErrNoDocuments {
			return nil, auth.ErrUserDoesNotExist
		}

		return nil, err
	}

	return user, nil
}
