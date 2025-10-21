import dotenv from 'dotenv'

dotenv.config()

console.log('process user: ', process.env.DB_USER)

export default {
  HOST: "localhost",
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: "weatherdb",
  dialect: "postgres",
  PORT: 5432,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
  },
};