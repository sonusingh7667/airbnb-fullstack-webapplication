const express = require("express");
const router = express.Router(); 

//posts
//index
router.get("/", (req, res) => {
    res.send("posts for Users")
});
//show
router.get("/:id", (req, res) => {
    res.send("posts for Users Id")
});
//post
router.post("/", (req, res) => {
    res.send("POST FOR users")
});
//delete
router.delete("/:id", (req, res) => {
    res.send("delete for Users")
});

module.exports = router;
