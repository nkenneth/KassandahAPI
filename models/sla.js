const mongoose = require("mongoose")

const SlaSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    ttl: { type: Number, default: 0 }
}, { timestamps: true });

const Sla = mongoose.model("Sla", SlaSchema)

module.exports.Sla = Sla