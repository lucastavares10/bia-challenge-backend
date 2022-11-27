import { Router, Response, Request } from 'express'

//bots
import { makeCreateBotControllerFactory } from './main/factories/bot/makeCreateBotControllerFactory'
import { makeFindAllBotControllerFactory } from './main/factories/bot/makeFindAllBotControllerFactory'
import { makeFindByIdBotControllerFactory } from './main/factories/bot/makeFindByIdBotControllerFactory'
import { makeUpdateBotControllerFactory } from './main/factories/bot/makeUpdateBotControllerFactory'
import { makeDeleteBotControllerFactory } from './main/factories/bot/makeDeleteBotControllerFactory'

//conversations
import { makeStartConversationControllerFactory } from './main/factories/conversation/makeStartConversationControllerFactory'

//messages
import { makeSendMessageControllerFactory } from './main/factories/message/makeSendMessageControllerFactory'
// import { makeGetMessageByIdControllerFactory } from './main/factories/message/makeGetMessageByIdControllerFactory'
// import { makeListAllMessageByConversationIdControllerFactory } from './main/factories/message/makeListAllMessageByConversationIdControllerFactory'

const router = Router()

router.get('/health', (_, res: Response) => res.json('ok'))

//bots
router.post('/bots', (req: Request, res: Response) => {
  makeCreateBotControllerFactory().handle(req, res)
})
router.get('/bots', (req: Request, res: Response) => {
  makeFindAllBotControllerFactory().handle(req, res)
})
router.get('/bots/:id', (req: Request, res: Response) => {
  makeFindByIdBotControllerFactory().handle(req, res)
})
router.put('/bots/:id', (req: Request, res: Response) => {
  makeUpdateBotControllerFactory().handle(req, res)
})
router.delete('/bots/:id', (req: Request, res: Response) => {
  makeDeleteBotControllerFactory().handle(req, res)
})

//conversations
router.post('/conversations', (req: Request, res: Response) => {
  makeStartConversationControllerFactory().handle(req, res)
})

//messages
router.post('/messages', (req: Request, res: Response) => {
  makeSendMessageControllerFactory().handle(req, res)
})
// router.get('/messages/:id', (req: Request, res: Response) => {
//   makeGetMessageByIdControllerFactory().handle(req, res)
// })
// router.get('/messages/:conversationId', (req: Request, res: Response) => {
//   makeListAllMessageByConversationIdControllerFactory().handle(req, res)
// })

export default router
