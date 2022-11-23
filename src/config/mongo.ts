import env from 'env-var'

const dbOptions = {
    type: 'mongodb',
    database: env.get('DB_NAME').default('challenge_db').asString(),
    host: env.get('DB_HOST').default('localhost').asString(),
    port: env.get('DB_PORT').default(27017).asPortNumber(),
}

export default dbOptions