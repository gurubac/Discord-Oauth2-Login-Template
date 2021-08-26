const mongoose = require("mongoose");
const signale = require("signale");
const UserModel = require("../models/DiscordUser");

module.exports = class Database {
  constructor(mongoURL) {
    mongoose
      .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        signale.success("Database Connected!");
      })
      .catch((err) => {
        signale.error(err);
      });
  }

  //searches for user in database by discordId
  async findUser(discordId) {
    return UserModel.findOne({ discordId: discordId });
  }
};
