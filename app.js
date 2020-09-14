const express = require('express')
const port = process.env.PORT || 3000
const app = express()
app.get('/', (req, res) => res.send('begining heroku'))
app.listen(port, () => console.log(`express run at port: ${port}`))