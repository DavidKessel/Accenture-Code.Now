const express = require('express');
const router = express.Router();

const callApi = require('./services/services.js')

router.get('/airpoll/latest', callApi, (req, res, next) => {
    res.status(200).send(res.airData)
})

router.get('/abc', (req, res) => {
    res.status(200).send('Everything ok')
})

router.get('/', (req, res, next) => res.status(404).send('Page does not exist'))


module.exports = router