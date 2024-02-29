const notFound = (req, res, next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error)
}


const errorHandler = (err, req, res, next) => {
    const statuscode = res.status;

    if (!statuscode) {
        res.status(500);
    }

    res.json({
        message: err.message,
        stack: err.stack
    })
}

export {
    notFound, errorHandler
}