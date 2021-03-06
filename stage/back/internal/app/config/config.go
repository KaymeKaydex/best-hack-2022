package config

import (
	"context"
	"os"

	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

// Config Структура конфигурации;
// Содержит все конфигурационные данные о сервисе;
// автоподгружается при изменении исходного файла
type Config struct {
	ServiceHost string
	ServicePort int

	AppVersion string
	LogLevel   string

	Mongo Mongo
	JWT   JWT
}

type Mongo struct {
	URI        string
	Collection string
	Name       string
}

type JWT struct {
	// jwt
	SigningMethod string
	HourLifeTime  int
	SecretKeyJWT  string `mapstructure:"JWT_SECRET_KEY"`
}

// NewConfig Создаёт новый объект конфигурации, загружая данные из файла конфигурации
func NewConfig(ctx context.Context) (*Config, error) {
	var err error

	configName := "config"
	_ = godotenv.Load()
	if os.Getenv("CONFIG_NAME") != "" {
		configName = os.Getenv("CONFIG_NAME")
	}

	viper.SetConfigName(configName)
	// viper.SetConfigType("toml")
	viper.AddConfigPath("./config")
	viper.AddConfigPath(".")
	viper.WatchConfig()

	err = viper.ReadInConfig()
	if err != nil {
		return nil, err
	}

	cfg := &Config{}
	err = viper.Unmarshal(cfg)
	if err != nil {
		return nil, err
	}

	viper.BindEnv("JWT_SECRET_KEY")

	log.Info("config parsed")
	return cfg, nil
}
