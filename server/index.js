const Koa = require('koa')
const { Nuxt, Builder } = require('nuxt')
const consola = require('consola')
const app = new Koa()

// 1. 加载 Nuxt 配置
let config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // 2. 初始化 Nuxt
  const nuxt = new Nuxt(config)

  // 3. 如果是开发模式，构建
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 4. Koa 中间件挂载 Nuxt 渲染
  app.use(async (ctx, next) => {
    ctx.status = 200
    ctx.respond = false // 让 Nuxt 自己处理响应
    await nuxt.render(ctx.req, ctx.res)
  })

  // 5. 启动服务
  const port = process.env.PORT || 4002
  app.listen(port, () => {
    consola.ready({
      message: `Server listening on http://localhost:${port}`,
      badge: true
    })
  })
}

start()
