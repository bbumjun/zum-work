const express = require("express");
const router = express.Router();

router.get("/:category", (req, res) => {
  const { category } = req.params;
  res.send(require(`../json/${category}.json`).slice(0, 4));
});

router.get("/:category/:page", (req, res) => {
  const { category } = req.params;
  const page = parseInt(req.params.page);
  const content = require(`../json/${category}.json`);
  res.send(content.slice((page - 1) * 12, page * 12));
});

module.exports = router;
