package mongo

import (
	"context"
	"time"

	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/KaymeKaydex/best-hack-2022/internal/app/config"
)

type Repository struct {
	db *mongo.Collection
}

func New(ctx context.Context) *Repository {
	cfg := config.FromContext(ctx).Mongo

	client, err := mongo.NewClient(options.Client().ApplyURI(cfg.URI))
	if err != nil {
		log.WithError(err).Fatal("Error occurred while establishing connection to mongoDB")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database(cfg.Name)

	return &Repository{
		db: db.Collection(cfg.Collection),
	}
}
