import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error , req, res , next) => {
    console.log(error);
    const defaultError = {
        StatusCodes : StatusCodes.INTERNAL_SERVER_ERROR,
        msg : 'something went wrong, try again later'
    }
    res.status(defaultError.StatusCodes).json({msg : error })
}

export default errorHandlerMiddleware;