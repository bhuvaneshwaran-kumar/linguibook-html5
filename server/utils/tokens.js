const jwt = require('jsonwebtoken')
const { PROD, SECRET1, SECRET2, COOKIE_NAME } = require('../constants')
const User = require('../models/Users')

const createTokens = async (user) => {

    const { userName, _id, tokenVersion } = user
    let payload = { userName, _id }

    const accessToken = jwt.sign(payload, SECRET1, {
        expiresIn: "10m",
    }) // short time and will be sent over http payload

    // tokenVersion is needed only in refreshToken, with tokenVersion we can revolk user auth
    payload = { ...payload, tokenVersion }
    const refreshToken = jwt.sign(payload, SECRET2, {
        expiresIn: "7d"
    }) // long time and will be sent over http cookie


    return { accessToken, refreshToken }

}

const verifyAccessToken = async (accessToken) => {
    try {
        const data = await jwt.verify(accessToken, SECRET1)
        return data
    } catch (err) {
        return null
    }
}

const verifyRefreshToken = async (refreshToken) => {
    try {
        const data = await jwt.verify(refreshToken, SECRET2)
        return data
    } catch (err) {
        return null
    }
}

const sendRefreshTokenAsCookie = (res, refreshToken) => {
    res.cookie(COOKIE_NAME, refreshToken, {
        httpOnly: true, // only be accessible by server
        path: '/api/auth', // When a cookie is set with a specific path, it will only be sent by the client to the server for requests that match that path or its subpaths.
        secure: PROD, //  the cookie should be sent only over HTTPS connections.
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days.
    })
}


// If the user has changed or forgotten their password
// by inc the tokenVersion, all the previous refreshTokens will become invalid.
const revokeRefreshTokens = async (_id) => {
    await User.findOneAndUpdate({ _id }, { $inc: { tokenVersion: 1 } }).exec()
    return true
}

const isAuthenticated = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.split(" ")[1]

        const payload = await verifyAccessToken(token)

        if (!payload) {
            throw new Error('invalid token: ')
        }
        req.user = payload
        return next()
    } catch (err) {
        res.status(401).json({
            ok: false,
            message: err
        })
    }
}

module.exports = {
    createTokens,
    verifyAccessToken,
    verifyRefreshToken,
    sendRefreshTokenAsCookie,
    revokeRefreshTokens,
    isAuthenticated
}