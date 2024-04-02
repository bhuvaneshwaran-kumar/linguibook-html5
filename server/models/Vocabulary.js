const mongoose = require('mongoose')

const { model, Schema } = mongoose

const vocSchema = new Schema(
    {
        term: String,
        meaning: String,
        relmEg: String,
        contextId: String,
        likes: {
            type: [String],
            default: [],
        },
        comments: {
            type: [{
                userID: String,
                userName: String,
                comment: String,
                replyComment: [{
                    userID: String,
                    userName: String,
                    comment: String,
                }]
            }],
            default: []
        }
    }
)

const Vocabulary = model("vocabularies", vocSchema)

module.exports = Vocabulary