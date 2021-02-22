const express = require('express');
const app = express();

const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')

const errorHandler = require('./error/errorhandler.js')
const routes = require('./routes.js')


const PORT = process.env.PORT || 8081

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))
app.use('/', routes)



app.use(errorHandler)
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})