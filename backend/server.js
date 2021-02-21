const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors')
const errorHandler = require('./error/errorhandler.js')

const routes = require('./routes.js')


const PORT = process.env.PORT || 8081

app.use(cors())
app.use(bodyParser.json())

app.use('/', routes)
app.use(errorHandler)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
}

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})