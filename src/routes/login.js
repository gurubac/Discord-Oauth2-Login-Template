const path = require("path");
const signale = require("signale");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(path.dirname(require.main.filename), "../docs/login.html")
  );
});

module.exports = router;
