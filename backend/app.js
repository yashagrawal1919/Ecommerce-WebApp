import express from 'express'

// import { authRouter } from './routes'
// import { errorHandler } from './middlewares'

const app = express()

app.use(express.json())

app.use('/api/user', authRouter)

export { app }