const express = require("express");
const router = express.Router();

//index--users
router.get("/", (req, res) => {
    res.send("Get for Users")
});
//Show
router.get("/:id", (req, res) => {
    res.send("Get for Users Id")
});
//post
router.post("/", (req, res) => {
    res.send("POST FOR users")
});
//delete
router.delete("/:id", (req, res) => {
    res.send("delete for Users Id")
});


module.exports = router;
