const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post('/', async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ error: 'Email required' })
    const record = await prisma.newsletter.upsert({ where: { email }, update: {}, create: { email } })
    res.json({ message: 'Subscribed', email: record.email })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
