import express from 'express'
import portfinder from 'portfinder'
import morgan from 'morgan'
import path from 'path'

import apiConfig from './api/config'

const app = express()
app.use(morgan('tiny'))

// api route start
// config

app.get('/config', apiConfig.get)
// api route end

const staticServe = express.static(path.join(__dirname, 'public'))
app.use(staticServe)

const run = async () => {
  const targetPort = process.env.PORT || 3000
  const port = await portfinder.getPortPromise({ port: targetPort })
  app.listen(port, () => console.log(`express run at port: ${port}`))
}

run()
