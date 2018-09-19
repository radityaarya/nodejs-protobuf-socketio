const express = require('express')
const http    = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const PORT = 2323

const Message = require('./messages_pb')

io.on("connection", (socket) => {
    console.log("an user connected with ID " + socket.id)

    socket.on("disconnect", () => {
        console.log("user disconnected, ID " + socket.id)
    })

    const message = new Message.Message()
    message.setBodymessage("Hello there")

    const bytesMessage = message.serializeBinary()
    io.emit("message", bytesMessage)
})

server.listen(PORT, () => {
    console.log("Server started on port ", PORT)
})