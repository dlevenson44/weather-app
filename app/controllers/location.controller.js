import db from '../models/index'

const Op = db.Sequelize.Op
const Location = db.locations

const generateError = (res, action, id) => {
  const message = `Error ${action} Favorite ${id}: ${e}`
  console.error(message)
  res.status(500).send({ message })
}

export const create = async (req, res) => {
  if (!req.body.name || !req.body.zip) {
    res.status(400).send({
      message: "Missing params"
    })
    return
  }

  const location = {
    name: req.body.name,
    zip: req.body.zip
  }
  try {
    const resp = await Location.create(location)
    res.status(201).json(resp)
  } catch (e) {
    generateError(res, 'creating')
  }
}

export const findAll = async (req, res) => {
  const { name } = req.query
  // Allows filtering support
  const condition = name ? { name: { [Op.like]: `%${title}%`} } : null
  try {
    const resp = await Location.findAll({ where: condition })
    res.status(200).json(resp)
  } catch (e) {
    generateError(res, 'fetching')
  }
}

export const deleteAll = async (req, res) => {
  try {

  } catch (e) {
    generateError(res, 'deleting')
  }
}

export const findOne = async (req, res) => {
  const id = req.params.id
  try {
    // find by primary key
    const resp = await Location.findByPk(id)
    res.status(200).json(resp)
  } catch (e) {
    generateError(res, 'fetching', id)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  try {
    const resp = await Location.update(req.body, { where: { id } })
    res.status(200).json(resp)
  } catch(e) {
    generateError(res, 'updating', id)
  }
}

export const deleteOne = async (req, res) => {
  const id = req.params.id
  try {
    const resp = await Location.destroy({ where: { id } })
    res.status(200).json(resp)
  } catch (e) {
    generateError(res, 'deleting', id)
  }
}
