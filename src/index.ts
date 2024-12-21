import { Elysia } from 'elysia'
import swagger from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .get('*', { message: 'Server running...' })

app.onError((error) => {
  console.error(error.error)
})

app.onRequest(({ request }) => {
  console.log(`${request.method} ${request.url}`)
})

app.listen(5174, ({ hostname, port }) => {
  console.log(`Elysia server running at http://${hostname}:${port}`)
})

export type App = typeof app
