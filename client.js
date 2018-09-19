const socket = require("socket.io-client")("http://localhost:2323")
const Message = require('./messages_pb')

socket.on("message", (data) => {
    const dataArr = Object.keys(data).map(m => data[m])
    const decodedMessage = proto.Message.deserializeBinary(dataArr)

    console.log("message : " + decodedMessage.getBodymessage())
})