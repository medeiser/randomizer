# Randomizer

API that returns an integer value in a specific range.

## Instalation

Parrot requires [Node.js](https://nodejs.org/) to run.
It also uses [nodemon](https://nodemon.io) for development.

### *Install dependencies:*

```sh
$ npm install
```

### *Run dev (uses nodemon):*

```sh
$ npm run dev
```

### *Run production:*

```sh
$ npm start
```

## Docker

An official image is available at [Docker Hub](https://hub.docker.com/r/medeiser/randomizer)

A docker configuration file is provided so that an image can also be built.

### *Build docker image:*

```sh
$ docker build -t randomizer .
```

### *Running docker image:*

```sh
$ docker run --rm -ti -p 3000:3000 randomizer
```

## Usage

Randomizer can be called with ***min***, ***max*** or no parameters.

Examples:

```sh
$ curl -X GET 'http://localhost:3000/random'
2562129742708042
```

```sh
$ curl -X GET 'http://localhost:3000/random?max=10'
3
```

```sh
$ curl -X GET 'http://localhost:3000/random?max=10&min=5'
8
```
