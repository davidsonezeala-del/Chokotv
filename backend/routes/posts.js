const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const posts = await prisma.post.findMany({ include: { author: true } })
  res.json({ posts })
})

router.post('/', async (req, res) => {
  try {
    const { title, slug, content, category, image, authorId } = req.body
    const post = await prisma.post.create({ data: { title, slug, content, category, image, authorId } })
    res.json({ post })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
