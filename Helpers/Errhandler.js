function errHandler (err, req, resp, next)  {
    if(err.name === "UnauthorizedError"){
        return resp.status(401).json({message: "The user is not authenticated.."})
    } 

    if(err.name === "ValidationError"){
        return resp.status(401).json({message: "err"})
    }

    return resp.status(400).send({err: "Error 404"});


}

export default errHandler;