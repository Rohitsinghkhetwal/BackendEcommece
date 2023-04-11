import expressJwt from 'express-jwt'

const authJwt = () => {
    const secret = process.env.secret;
    return expressJwt({
        secret,
        algorithms: ['HS256']
    })
}

export default authJwt;