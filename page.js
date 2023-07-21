let express = require('express')
let router = express.Router()

router.get('/:num', function (req, res) {
  return res.send(req.params.num + ' page')
})

module.exports = router