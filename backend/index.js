require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ status: 'ChokoTv backend running' })
})

// Placeholder routes
app.use('/api/posts', require('./routes/posts'))
app.use('/api/ads', require('./routes/ads'))
app.use('/api/orders', require('./routes/orders'))
app.use('/api/newsletter', require('./routes/newsletter'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/payments', require('./routes/payments'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
