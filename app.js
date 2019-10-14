// Randomizer
// Implements an API that returns an integer value in a specific range

const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')

const app = new Koa()
const router = new Router()

router.get('/random', ctx => {
    const minParam = parseInt(ctx.query.min)
    const maxParam = parseInt(ctx.query.max)
    ctx.body = randomGenerator(minParam, maxParam)
})

app.use(Logger())
    .use(router.routes())
    .listen(3000)

const randomGenerator = (min , max ) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}