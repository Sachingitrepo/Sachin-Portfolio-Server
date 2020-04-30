const express = require("express");
const router = new express.Router();
const contactUtil = require("../util/contact-util");
router.get("/getMessageByID", (req, res) => { });

router.post("/createMessage", (req, res) => {
    try {
        const allMessage = contactUtil.readAllMessage();
        const data = JSON.parse(allMessage.toString());
        if (!data) {
            return res
                .status(404)
                .send({ status: true, message: "Files related issue!" });
        }
        data.push(req.body);
        const isSaved = contactUtil.saveMessage(data);
        if (!isSaved) {
            return res
                .status(404)
                .send({ status: true, message: "message saved unsucessful!" });
        }
        res.status(201).send({ status: true, message: "message saved sucessful!" });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/getAllMessages", (req, res) => {
    try {
        const allMessage = contactUtil.readAllMessage();
        const data = JSON.parse(allMessage.toString());
        console.log(data);
        res.send(data)
    } catch (e) {
        res.status(400).send(e);
    }
});
router.delete("/deleteMessageById", (req, res) => { });

router.patch("/updateMessageByID", (req, res) => { });

module.exports = router;
