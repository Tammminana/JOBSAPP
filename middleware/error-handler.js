const errorHandlerMiddleware = (error , req, res , next) => {
    console.log(error);
    res.status(500).json({msg : ' found and error '})
}

export default errorHandlerMiddleware;