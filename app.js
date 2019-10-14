// Randomizer
// Implements an API that returns an integer value in a specific range

const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')

const app = new Koa()
const router = new Router()

router.get('/random', ctx => {
    ctx.body = randomGenerator(ctx.query.min, ctx.query.max)
})

app.use(Logger())
    .use(router.routes())
    .listen(3000)

const randomGenerator = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}