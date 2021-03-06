# Code for stage project

## Презентация 
https://disk.yandex.ru/d/mbUb-WysDFUslA

## Как запускать? 

На тесте мы поднимали реверс прокси nginx на фронт из контейнера и ставили на порт 3000, бек мы повесили внутри сети docker0 (см iptables)

### Как поднять фронт? 
Контейнером: 
+ перейти в папку front
+ ``$ pwd`` - убедитесь в пути
+ ```$ docker build -t front . # сбилдит вам image``` 
+ Взять хэш image`a и поднять контейнер  
```shell
$ docker run -p 80:3000 -d bd880a77b3ab # поднять по хэшу
$ docker ps # убедиться что он поднялся, потому что -d отключает stdout
$ docker logs c2e6ccef4db6 # снимаем логи что все ок, хэш - хэш вашего контейнера
```

Вручную 
+ Убедитесь что у вас есть пакет npm  ```$ npm version```
+ Если нет - установите :
  + linux : ```$ apt install npm```
  + linux-alpine ```$ apk install npm```
  + mac-os ```$ brew install npm```
+ Запустите: ```$ npm start```

### Как поднять бек?
В контейнере:
+ Убедитесь в наличии компилятора для языка go ```$ go version```
    + Если его нет - установите https://go.dev/doc/install
+ Сделайте билд аналогично тому что находится во фронте но с тегом back и с флагом -f чтобы указать корневую директорию сервису
+ Аналогично фронту запустите бек на другом порту

Вручную:

через прямой запуск из go в качетве демона linux:
```shell
$ go run ./cmd/back/main.go > /dev/null &
```
через билд с выводом в stdout: 
```shell
$ go build ./cmd/back/main.go
$ ./bin/back
```