const mongoose = require('mongoose')

const { model, Schema } = mongoose

const userSchema = new Schema(
    {
        userName: String,
        email: String,
        password: String,
        bio: String,
        memInfo: {
            type: [String],
            unique: true
        },
        admInfo: {
            type: [String],
            unique: true
        },
        tokenVersion: {
            type: Number,
            default: 0
        },
        profileUrl: String
    },
    {
        timestamps: true
    }
)

const User = model("User", userSchema)

module.exports = User