const express = require('express')
const geminiAi = require('../service/gemini')
const { isAuthenticated } = require('../utils/tokens')
const Router = express.Router()

Router.post('/generate', isAuthenticated, async (req, res) => {
    try {
        let result = await geminiAi.generateText(req.body.promptText)
        if (result.trim().length === 0) { 
            result = "I apologize, but I'm unable to generate a response to your request at the moment."
        }
        return res.status(200).json({
            ok: true,
            data: { result }
        })
    } catch (Err) {
        console.log(Err);
        return res.status(400).json({
            ok: false,
            data: { ok: "fail" }
        })
    }
})

module.exports = Router