const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    discordId: { type: String, required: true },
    username: { type: String, required: true },
    discriminator: { type: String, required: true },
    avatar: { type: String, required: true }

});

const DiscordUser = module.exports = mongoose.model("DiscordUser", UserSchema);