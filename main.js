// const myModule = require('./myModule.js')
//
// console.log(myModule.plus(5, 7))
// console.log(myModule.minus(9, 7))

const fs = require('fs')

// fs.readFile('text.txt', 'utf8', function(error, data) {
//   console.log(data)
// })
//
// const text = fs.readFileSync('text.txt', 'utf8')
// console.log(text)

// fs.writeFile('text1.txt', 'hello1', 'utf8', function(err) {
//   console.log('async')
// })
//
// fs.writeFileSync('text2.txt', 'hello2', 'utf8')
// console.log('sync')

// try {
//   const data = fs.readFileSync('text.txt', 'utf8')
//   console.log(data)
// } catch (e) {
//   console.log(e)
// }
//
// fs.readFile('text.txt', 'utf8', function (err, data) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

const express = require('express')
const app = express()

// app.get('/a', function (req, res) {
//   // return res.send('aaa')
//   return res.json({
//     message: 'a',
//     message2: 'b'
//   })
// })
//
// app.get('/page/:num', function (req, res) {
//   return res.send(req.params.num + ' page')
// })
//
// app.get('/user', function (req, res) {
//   return res.send(req.query)
// })

app.get('/main', function (req, res) {
  return res.send('main')
})

let user = require('./user.js')
let page = require('./page.js')
app.use('/user', user)
app.use('/page', page)

app.listen(52273, function () {
  console.log('Server Running at http://127.0.0.1:52273')
})

























