const { nanoid } = require('nanoid')
const socketIO = require('socket.io')
const app = require('express')()
const server = require('http').createServer(app)

const PORT = 3000
const io = socketIO(server, {
    cors: {
        origin: "*"
    },
})

const users = []
const rooms = []

