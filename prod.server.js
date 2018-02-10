const express = require('express')
const config = require('./config/index')
const axios = require('axios')
let app = express()

app.use(express.static('./dist'))

const PORT = process.env.PORT || 8888
module.exports = app.listen(PORT, (err) => {
  if(err){
    console.log(err)
    return
  }
  console.log(`the http server is running at http://localhost:${PORT}\n`)
})
