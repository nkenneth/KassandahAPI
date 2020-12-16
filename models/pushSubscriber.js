const Joi = require("joi");
const mongoose = require("mongoose");

const pushSubscriberSchema = new mongoose.Schema({
    endpoint: String,
    keys: mongoose.Schema.Types.Mixed,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const PushSubscriber = mongoose.model("pushSubscriber", pushSubscriberSchema);


exports.PushSubscriber = PushSubscriber;
