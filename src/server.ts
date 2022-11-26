import 'reflect-metadata'
import * as env from 'env-var'

import {
  app,
  logger,
  shutdownHandlers,
  AppDataSource,
  startSocketIoServer,
} from './loaders'

const PORT = env.get('PORT').default('4000').asIntPositive()

const server = app.listen(PORT, () => {
  AppDataSource.initialize()
    .then(() => {
      logger.info('MongoDB connected')
      logger.info(`Server is running on port ${PORT}`)
    })
    .catch((error) => {
      logger.error(error)
      process.exit(1)
    })
})

startSocketIoServer(server)

shutdownHandlers.init(server)
