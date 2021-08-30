# Discord Oauth2 Login Template

## Live example - https://discordoauth2logintemplate.herokuapp.com/login

**Please allow a few seconds for the site to load as it is hosted on a free heroku dyno which shuts down automatically after periods of inactivity.**

### A simple template using react and express to login with discord on websites.

<p>
  <img src="https://raw.githubusercontent.com/gurubac/Discord-Oauth2-Login-Template/main/readmeimage.png" />
</p>

****This template is perfect for anyone looking to use discord as a primary or secondary authentication system! Some examples of people who typically implement systems like this are discord server owners who provide any type of online service. Discord authentication is very popular with automated checkout software, discord user managment bot dashboards, proxy companies for sneaker/retail botting, sneaker info groups, and so much more!****


## Setup
### Your .env file should look like

**Mongo DB connection URL**

```MONGO_LOCAL_CONN_URL= INSERT_HERE```

**Discord Oauth2 Stuff**

```CLIENT_ID = INSERT_HERE```

```CLIENT_SECRET = INSERT_HERE```

```CLIENT_REDIRECT = INSERT_HERE```

**Desired localhost port number (currently 3000)**

```PORT = INSERT_HERE```

**Express session secret**

```SESSION_SECRET = INSERT_HERE```