import express from "express"
import * as locations from "../controllers/location.controller.js"

export default (app) => {
  const router = express.Router()
  router.get('/', locations.findAll)
  router.get('/:id', locations.findOne)
  router.post('/', locations.create)
  router.put('/:id', locations.update)
  router.delete('/', locations.deleteAll)
  router.delete('/:id', locations.deleteOne)

  app.use('/api/locations', router)
}
