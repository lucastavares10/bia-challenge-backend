import 'reflect-metadata'
import { DataSource } from 'typeorm'

import Entities from '../entities/index'
import dbConfig from '../config/mongo'

const AppDataSource = new DataSource({
  type: 'mongodb',
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  entities: [...Object.values(Entities)],
  logging: true,
  maxQueryExecutionTime: 1000,
  useUnifiedTopology: true
})

export default AppDataSource
