const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const { userId } = req.query
  const where = userId ? { where: { userId: String(userId) } } : {}
  const orders = await prisma.order.findMany(where)
  res.json({ orders })
})

router.post('/', async (req, res) => {
  try {
    const { userId, serviceId, amount } = req.body
    const order = await prisma.order.create({ data: { userId, serviceId, amount: Number(amount) } })
    res.json({ order })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
