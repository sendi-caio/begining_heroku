import db from '../db/models'

const get = (req, res) => {
  db.User.findAll().then(
    (data) => res.send(data),
  )
}

export default {
  get,
}
