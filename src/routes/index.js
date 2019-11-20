const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.render("index.html", {title: "first website"})
    //console.log(path.join(__dirname, "views/index.html"))
    // Saber la ruta de index.js console.log(__dirname)
});
router.get("/contact", (req, res) => {
    res.render("contact.html", {title: "Contact Eduardo Rico"})
    //console.log(path.join(__dirname, "views/index.html"))
    // Saber la ruta de index.js console.log(__dirname)
});


module.exports = router;