import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get("/api/clock", (c) => {
  return c.json({
    time: new Date().toLocaleDateString()
  })
})

app.get("*", (c) => ww)

export default app
