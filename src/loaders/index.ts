import './dotenv'
import AppDataSource from './mongo'
import app from './app'
import logger from './logger'
import shutdownHandlers from './shutdownHandlers'
import { startSocketIoServer } from './socketIO'

export { app, logger, shutdownHandlers, AppDataSource, startSocketIoServer }
