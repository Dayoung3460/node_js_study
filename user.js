let express = require('express')
let router = express.Router()

router.get('/', function (req, res) {
  return res.send(req.query)
})

module.exports = router