const mongoose = require("mongoose")

const WorkflowSchema = new mongoose.Schema({
    name: {type: String, default:""},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    phaseId: { type: mongoose.Schema.Types.ObjectId, ref: "phase", required: true },
})

const Workflow = mongoose.model("Workflow", WorkflowSchema)


module.exports.Workflow = Workflow