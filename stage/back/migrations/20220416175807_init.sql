-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS users
(
    login       varchar(255) UNIQUE,
    amount      bigint,
    stocks      text[],
    first_name  varchar(255),
    last_name   varchar(255),
    middle_name varchar(255),
    created_at  timestamp
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE users;
-- +goose StatementEnd
