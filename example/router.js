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

router.post('/base/post', function (req, res) {
  res.json(req.body)
})

router.post('/error/timeout', function (req, res) {
  setTimeout(()=> {
    res.json({
      mesg:'hello,world'
    })
  }, 4000)
})

module.exports = router