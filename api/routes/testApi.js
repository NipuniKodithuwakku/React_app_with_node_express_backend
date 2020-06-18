const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("API works properly...");
});

module.exports = router;
