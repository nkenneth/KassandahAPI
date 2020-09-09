const mongoose = require("mongoose")

const SlaSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    ttl: { type: Number, default: 0 }
})

const Sla = mongoose.model("Sla", SlaSchema)

module.exports.Sla = Sla