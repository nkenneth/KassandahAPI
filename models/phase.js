const mongoose = require("mongoose");

const PhaseSchema = new mongoose.Schema({
    name: {type: String, default: ""},
    slaId: {type: mongoose.Schema.Types.ObjectId, ref:"sla"}

})


const Phase = mongoose.model("Phase", PhaseSchema);


module.exports.Phase = Phase;