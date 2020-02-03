const { Router } = require("express");
const router = Router();
const fs = require("fs");
const PATH = "./messages/";

router.post("/", (req, res) => {
  const message = req.body;
  const date = new Date();
  const fileName = `${PATH + date}.txt`;

  fs.writeFileSync(fileName, JSON.stringify({ ...message, date }));

  res.json({ ...message, date });
});

router.get("/", (req, res) => {
  const messages = fs
    .readdirSync(PATH)
    .slice(-5)
    .map(file => JSON.parse(fs.readFileSync(PATH + file)));
  res.json({ messages });
});

module.exports = router;
