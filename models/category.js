const mongoose = require("mongoose")
const { string } = require("joi")


const CategorySchema = new mongoose.Schema({
    name: {type: String, default: ""},
    description: {type: string, default: ""}
})

const Category = mongoose.model("Category", CategorySchema)

module.exports.Category = Category