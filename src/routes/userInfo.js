const path = require("path");
const signale = require("signale");
const router = require("express").Router();
const Database = require("../classes/Database");
const database = new Database(process.env.MONGO_LOCAL_CONN_URL);

function isAuthorized(req, res, next) {
  if (req.user) {
    signale.info("User is logged in");
    next();
  } else {
    signale.info("User is not logged in");
    return res.redirect("../login");
  }
}

router.get("/", isAuthorized, async (req, res) => {
  //get data from databse
    try {
      //findUser is a custom made function from Database.js
      let data = await database.findUser(req.user.discordId);
      res.json(data);
      res.send(data);
    } catch(error) {
      console.log("");
    }
});

module.exports = router;
