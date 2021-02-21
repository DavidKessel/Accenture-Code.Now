const express = require('express');

const axios = require('axios');
const ApiError = require('../error/ApiError');


const callApi = async (req, res, next) => {

    try{
        const page = 'page=' + req.query.page
        const location = req.query.city ? 'city=' + req.query.city : 'country=' + req.query.country
        const url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/latest?${location}&${page}`

        const apiData = await axios.get(url)
        const airpollData = apiData.data
        res.airData = airpollData
    } catch (err) {
        if (err.response || err.request) next(ApiError.badRequest('Could not fetch data from the 3rd party api.'))
    }
    next()
}


module.exports = callApi