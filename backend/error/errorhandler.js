const ApiError = require("./ApiError")

const errorHandler = (err, req, res, next) => {

    console.log(err)
    
    if(err instanceof ApiError){
        res.status(err.code).send(err.message)
        return
    }

    //returns a generic message if err is unexpected
    res.status(500).send('Something went wrong - 500 error')
}

module.exports = errorHandler;