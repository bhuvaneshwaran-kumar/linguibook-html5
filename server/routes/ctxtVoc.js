const express = require('express')
const Context = require('../models/Contexts')
const Vocabulary = require('../models/Vocabulary')
const bcrypt = require('bcryptjs')
const Router = express.Router()

const { sendRefreshTokenAsCookie, createTokens, verifyRefreshToken, isAuthenticated } = require('../utils/tokens')
const { COOKIE_NAME } = require('../constants')
const { getVoc, ctxtAggregate } = require('../utils/aggregate')

Router.get('/getContext', isAuthenticated, async (req, res) => {
    try {
        let contextData = await Context.aggregate(ctxtAggregate);
        contextData = contextData[0]
        const activeContextId = Object.keys(contextData)[0];
        return res.status(200).json({
            ok: true,
            data: { activeContextId, contextData: contextData }
        })
    } catch (Err) { 
        return res.status(400).json({
            ok: false,
            data: { ok: "fail" }
        })
    }
})


Router.post('/getVoc', isAuthenticated, async (req, res) => {
    try {
        const { body, user } = req;
        const { contextId, from, size } = body;
        let result = await Vocabulary.aggregate(getVoc(contextId, from, size, user._id));
        return res.status(200).json({
            ok: true,
            data: { vocabularies: result[0] }
        })
    } catch (Err) { 
        return res.status(400).json({
            ok: false,
            data: { ok: "fail" }
        })
    }
})

const updateLike = async (data) => { 
    const { isLiked, vocabId, userId } = data;

    try {
        let updatedVocabulary;

        if (isLiked) {
            // Add userId to likes array if not already present
            updatedVocabulary = await Vocabulary.findByIdAndUpdate(
                vocabId,
                { $addToSet: { likes: userId } }, // $addToSet ensures no duplicate userIds
                { new: true }
            );
        } else {
            // Remove userId from likes array
            updatedVocabulary = await Vocabulary.findByIdAndUpdate(
                vocabId,
                { $pull: { likes: userId } },
                { new: true }
            );
        }

        if (!updatedVocabulary) {
            throw new Error('Vocabulary not found');
        }

        return updatedVocabulary;
    } catch (error) {
        console.error("Error updating vocabulary likes:", error.message);
        throw error;
    }
}

module.exports = { Router, updateLike }