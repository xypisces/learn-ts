const express = require('express')

const router = express.Router()

router.get('/simple/get', function (req, res) {
  res.json({
    msg: `hello,xuyu!`
  })
})

router.get('/base/get', function (req, res) {
  res.json(req.query)
})

module.exports = router