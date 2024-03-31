const express = require('express')
const User = require('../models/Users')
const bcrypt = require('bcryptjs')
const Router = express.Router()

const { sendRefreshTokenAsCookie, createTokens, verifyRefreshToken } = require('../utils/tokens')
const { COOKIE_NAME } = require('../constants')

// verify the refresh token from cookie
// return user,accessToken (sets new refreshToken in res as a cookie)
Router.post('/refresh', async (req, res) => {
    const token = req.cookies[COOKIE_NAME]
    console.log(token, COOKIE_NAME, req.cookies);
    if (!token) {
        return res.status(400).json({
            ok: false,
            message: 'no token Provided'
        })
    }

    const payload = await verifyRefreshToken(token)
    if (!payload) {
        return res.status(400).json({
            ok: false,
            message: 'refresh token expaired'
        })
    }

    const user = await User.findById(payload._id).exec()
    if (!user) {
        return res.status(400).json({ ok: false, message: 'no user exists with that token' })
    }

    if (user.tokenVersion !== payload.tokenVersion) {
        return res.status(400).json({ ok: false, message: 'Invalid Token' })
    }

    const { accessToken, refreshToken } = await createTokens(user)
    sendRefreshTokenAsCookie(res, refreshToken)

    const { userName, _id, bio, profileUrl } = user
    return res.status(200).json({
        ok: true,
        data: { accessToken, user: { name: userName, _id, bio, profileUrl } }
    })

})

// SIGN UP
Router.post('/signup', async (req, res) => {
    const data = req.body
    try {
        const oldUsers = await User.find({ userName: data.userName })
        if (oldUsers.length > 0) {
            return res.status(409).json({
                ok: false,
                message: 'userName already exist!'
            })
        }

        data.password = await bcrypt.hash(data.password, 10)

        const newUser = new User(data)
        await newUser.save()
        const { userName, _id } = newUser

        return res.status(200).json({
            ok: true,
            data: { userName, _id }
        })
    }
    catch (err) {
        console.error("Sign up error :-", err)
        return res.json({
            ok: false,
            message: "something went wrong"
        })
    }
})

//  LOG IN
Router.post('/login', async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        const user = await User.findOne({ userName: data.userName })
        if (!user) {
            return res.status(403).json({
                ok: false,
                message: `No User Exists with a user name of ${data.userName}`
            })
        }

        const isCorrectPassword = await bcrypt.compare(data.password, user.password)
        if (!isCorrectPassword)
            return res.status(403).json({
                ok: false,
                message: `Invalid password`
            })

        const { accessToken, refreshToken } = await createTokens(user)
        await sendRefreshTokenAsCookie(res, refreshToken)

        const { userName, _id, bio, profileUrl } = user

        res.status(200).json({
            ok: true,
            data: { accessToken, user: { name: userName, _id, bio, profileUrl } }
        })

    }
    catch (err) {
        console.log(`Error while logging in: ${err, err.message}`)
    }
})

// LOG OUT 
// set empty refreshTocken to the Client device.
Router.post('/logout', async (req, res) => {
    try {
        await sendRefreshTokenAsCookie(res, '')
        res.json({
            ok: true,
            message: 'successfully Logged out'
        })
    } catch (err) {
        console.log(err);
        res.json({
            ok: false, message: 'Ooops error occured.'
        })
    }

})




module.exports = Router