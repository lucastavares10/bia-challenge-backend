import logger from '@/loaders/logger'

import { MessageDispatcher } from '@/data/protocols/socketMessageDispatcher'
import { getSocketIoServer } from '@/loaders/socketIO'

export class SocketMessageDispatcher implements MessageDispatcher {
  async dispatch(data: MessageDispatcher.Params): Promise<void> {
    const socketConn = getSocketIoServer()

    socketConn.to(data.socketId).emit('send_message_to_user', data.data.text)

    logger.info(`Enviando mensagem para ${data.socketId}: `, data.data.text)
  }
}
