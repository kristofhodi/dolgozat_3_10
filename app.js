import express from 'express'
import movieRoutes from './routes/routes.js'

const app = express()

app.use(express.json())

app.use('/movies', movieRoutes)

app.listen(3000, () => {
    console.log('Server runs on 3000')
})