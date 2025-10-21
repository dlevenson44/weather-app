import cors from "cors"
import express from "express"
import db from "./models/index.js"
import locationsRoutes from "./routes/locations.routes.js"

const app = express()
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
// Parses incoming requests with JSON payloads
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to App' })
})

locationsRoutes(app)

db.sequelize.sync().then(() => console.log('db synced'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
