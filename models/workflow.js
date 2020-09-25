const mongoose = require("mongoose")

const WorkflowSchema = new mongoose.Schema({
    name: { type: String, default:"", required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
    phases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Phase", required: true }]
}, { timestamps: true });

const Workflow = mongoose.model("Workflow", WorkflowSchema)

module.exports.Workflow = Workflow