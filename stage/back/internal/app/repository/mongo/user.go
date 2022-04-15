package mongo

import (
	"context"

	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/models"
)

func (r *Repository) Insert(ctx context.Context, user *models.User) error {
	_, err := r.db.InsertOne(ctx, user)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("error on inserting user")

		return err
	}

	return nil
}

func (r *Repository) Get(ctx context.Context, username, password string) (*models.User, error) {
	user := new(models.User)

	if err := r.db.FindOne(ctx, bson.M{"_id": username, "password": password}).Decode(user); err != nil {
		log.Errorf("error occured while getting user from db: %s", err.Error())
		if err == mongo.ErrNoDocuments {
			return nil, err
		}

		return nil, err
	}

	return user, nil
}

func (r *Repository) GetByLogin(ctx context.Context, username string) (*models.User, error) {
	user := new(models.User)

	if err := r.db.FindOne(ctx, bson.M{"_id": username}).Decode(user); err != nil {
		log.Errorf("error occured while getting user from db: %s", err.Error())
		if err == mongo.ErrNoDocuments {
			return nil, err
		}

		return nil, err
	}

	return user, nil
}

func (r *Repository) SetAmount(ctx context.Context, username string, amount uint64) error {
	_, err := r.db.UpdateOne(ctx,
		bson.M{"_id": username},
		bson.D{
			{"$set", bson.D{{"packs_amount", amount}}},
		},
	)
	if err != nil {
		log.WithContext(ctx).WithError(err).Error("error on inserting user")

		return err
	}

	return nil
}
