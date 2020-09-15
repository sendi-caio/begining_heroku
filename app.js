const express = require('express')
const portfinder = require('portfinder')
const app = express()
const isDev = require('./config/isDev')
const db = require('./db/models')
// route start
app.get('/', (req, res) => {
  db.User.findAll().then(
    (data) => res.send({
      dev: isDev,
      DB_USERNAME: process.env.DB_USERNAME,
      data
    })
  )

})
// route end

const run = async () => {
  const defaultPort = 3000
  const targetPort = process.env.PORT || defaultPort
  const port = await portfinder.getPortPromise({ port: targetPort })
  app.listen(port, () => console.log(`express run at port: ${port}`))
}

run()
