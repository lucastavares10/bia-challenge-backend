import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'
import logger from './logger'
import { makeSendSocketMessageControllerFactory } from '@/main/factories/message/makeSendSocketMessageControllerFactory'

let socketIO: Server

export function startSocketIoServer(server: HttpServer) {
  socketIO = new Server(server, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 200,
    },
  })
  socketIO.on('connection', (socket) => {
    logger.info('a user connected')

    socket.on('send_message_to_bot', (data) => {
      makeSendSocketMessageControllerFactory().handle({
        ...data,
        socketId: socket.id,
      })
    })
  })

  socketIO.on('disconnect', () => {
    logger.info('a user disconnected')
  })

  socketIO.on('error', (error: Error) => {
    logger.error(error)
  })
}

export function getSocketIoServer() {
  return socketIO
}
