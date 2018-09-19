const express = require('express')
const http    = require('http')
const io      = require('socket.io')(http)

const app = express()
const server = http.createServer(app)
const PORT = 2323

server.listen(PORT, () => {
    console.log("Server started on port ", PORT)
})