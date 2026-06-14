const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const ads = await prisma.advertisement.findMany()
  res.json({ ads })
})

router.post('/', async (req, res) => {
  try {
    const { packageName, price, duration, status } = req.body
    const ad = await prisma.advertisement.create({ data: { packageName, price: Number(price), duration: Number(duration), status } })
    res.json({ ad })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
