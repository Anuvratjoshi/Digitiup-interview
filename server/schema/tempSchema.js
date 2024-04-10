/*

Define a schema for questions table as mentioned below -
text - string
option_a - short text
option_b - short text
option_b - short text
option_b - short text
correct_option = any one values from (option_a, option_b, option_c, option_d)

*/

const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    text: {
        type: String
    },
    option_a: {
        type: String,
        // require: true,
    },
    option_b: {
        type: String,
        // require: true
    }, option_c: {
        type: String,
        // require: true
    }, option_d: {
        type: String,
        // require: true
    }, correct_option: {
        type: String,
        enum: ["option_a", "option_b", "option_c", "option_d"]
    }
})

const TempModel = mongoose.model("TempModel", schema)
module.exports = TempModel