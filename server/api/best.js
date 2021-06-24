const express = require("express");
const router = express.Router();
const best = require("../json/best.json");

router.get("/", (req, res) => {
  return res.send(best);
});

module.exports = router;
