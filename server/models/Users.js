const mongoose = require('mongoose')

const { model, Schema } = mongoose

const userSchema = new Schema(
    {
        userName: String,
        password: String,
        bio: String,
        memInfo: {
            type: [String],
            default: [],
        },
        admInfo: {
            type: [String],
            default: []
        },
        tokenVersion: {
            type: Number,
            default: 0
        },
        profileUrl: { type: String, default: "1.png" }
    },
    {
        timestamps: true
    }
)

const User = model("User", userSchema)

module.exports = User