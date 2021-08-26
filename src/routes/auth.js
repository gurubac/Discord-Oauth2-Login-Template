const router = require("express").Router();
const passport = require("passport");
const path = require("path");

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/home",
  }),
  (req, res) => {
    res.send(200);
  }
);

router.get('/logout', (req, res) => {
  if(req.user) {
    req.logout();
    res.redirect('../login');
  }
});


module.exports = router;
