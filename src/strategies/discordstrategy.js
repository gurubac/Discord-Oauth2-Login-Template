require("dotenv").config();
const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
const DiscordUser = require("../models/DiscordUser");
const signale = require("signale");

passport.serializeUser((user, done) => {
  signale.info("serializing user");
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  signale.info("deserializing user");
  const user = await DiscordUser.findById(id);
  if (user) {
    done(null, user);
  }
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CLIENT_REDIRECT,
      scope: ["identify", "guilds"],
    },
    async (accessToken, refreshToken, profile, done) => {
      //to show list of servers and info about user
      // signale.info(profile)
      try {
        const user = await DiscordUser.findOne({ discordId: profile.id });
        if (user) {
          signale.info("User exists");
          done(null, user);
        } else {
          signale.info("User does not exist");
          const newUser = await DiscordUser.create({
            discordId: profile.id,
            username: profile.username,
            discriminator: profile.discriminator,
            avatar: profile.avatar
          });
          const savedUser = await newUser.save();
          done(null, savedUser);
        }
      } catch (err) {
        signale.error(err);
        done(err, null);
      }
    }
  )
);
