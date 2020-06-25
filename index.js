const express = require('express')
const http = require('http')


const app = express()

require('./init')(app)

const server = http.createServer(app)

server.listen(3000, function () {
    console.log('server is running on port:3000')
})