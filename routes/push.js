const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const { PushSubscriber } = require("../models/pushSubscriber");
const webpush = require("web-push");
const publicVapidKey = config.get("pushNotification.publicVapidKey");
const privateVapidKey = config.get("pushNotification.privateVapidKey");
const router = express.Router();

webpush.setVapidDetails('mailto:anselmleo@gmail.com', publicVapidKey, privateVapidKey);


// subscribe user
router.post("/subscribe", async (req, res) => {

    // Get push subscription object
    const subscriptionObject = req.body;

    const pushSubscriberExists = await PushSubscriber.findOne({endpoint: req.body.endpoint, keys: req.body.keys });

    if(!pushSubscriberExists) {
        const pushSubscriber = new PushSubscriber(subscriptionObject);
        console.log("pushSubscriber", pushSubscriber)

        pushSubscriber.save((err, subscription) => {
            if (err) {
                console.error(`Error occurred while saving subscription. Err: ${err}`);
                response.error(res, 'Technical error occurred', 500);
            } else {
                // create payload
                const payload = JSON.stringify({ title: "Notifications enabled"});

                // pass object into send notification
                webpush.sendNotification(subscription, payload).catch(error => console.error(error));
                response.success(res, "Subscription saved");
                // res.json({
                //     data: 'Subscription saved.'
                // });
            }
        });

    }

    const payload = JSON.stringify({ title: "Notifications enabled already"});

    // pass object into send notification
    webpush.sendNotification(pushSubscriberExists, payload).catch(error => console.error(error));
    response.success(res, "Subscription saved");


    // // send 201 resource created
    // res.status(201).json({});

    // // create payload
    // const payload = JSON.stringify({ title: "Notification enabled"});

    // // pass object into send notification
    // webpush.sendNotification(subscription, payload).catch( error => console.error(error));

});


module.exports = router;
