const mongoose = require('mongoose')

const { model, Schema } = mongoose

const contextSchema = new Schema(
    {
        value: String,
    }
)

const Context = model("contexts", contextSchema)

module.exports = Context