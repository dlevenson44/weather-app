import Sequelize from "sequelize";
import dbConfig from "../config/db.config";
import Location from './location.model'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  port: dbConfig.PORT
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.locations = Location(sequelize, Sequelize)

export default db
