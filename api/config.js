const db = require('../db/models')

module.exports = (req, res) => {
  db.User.findAll().then(
    (data) => res.send(data)
  )
}
