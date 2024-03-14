/* eslint-disable no-console */
import { Server } from 'socket.io'

const SocketHandler = (_: any, res: any) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    res.socket.server.io = io
    io.on('connection', (socket) => {
      socket.on('input-change', (msg) => {
        socket.broadcast.emit('update-input', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler
