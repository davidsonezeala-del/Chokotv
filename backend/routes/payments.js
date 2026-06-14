const express = require('express')
const router = express.Router()
const axios = require('axios')

// Initialize Paystack transaction (keeps Paystack only; Flutterwave disabled by request)
router.post('/paystack/init', async (req, res) => {
  try {
    const { email, amount, orderId } = req.body
    const secret = process.env.PAYSTACK_SECRET_KEY
    if (!secret) return res.status(500).json({ error: 'Missing PAYSTACK_SECRET_KEY' })
    const resp = await axios.post('https://api.paystack.co/transaction/initialize', {
      email,
      amount: Math.round(Number(amount) * 100),
      metadata: { orderId }
    }, {
      headers: { Authorization: `Bearer ${secret}` }
    })
    res.json(resp.data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
