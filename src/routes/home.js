const path = require("path");
const router = require("express").Router();
const signale = require("signale");

function isAuthorized(req, res, next) {
  if (req.user) {
    signale.info("User is logged in");
    next();
  } else {
    signale.info("User is not logged in");
    res.redirect("../login");
  }
}

router.get("/", isAuthorized);

module.exports = router;
