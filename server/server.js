const express = require('express')
const dotenv = require('dotenv')


const cors = require('cors')

const generateTokenRoute = require('./routes/generateToken.route')

const app = express()
app.use(cors())
dotenv.config()

const PORT = process.env.PORT 

app.use('/api', generateTokenRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})