const express = require("express");
const router = express.Router();

router.get("/student", (req, res) => {
    res.send("get student");
});

router.post("/student", (req, res) => {
    res.send("post student");
});

module.exports = router;