import React, { Component } from "react";
export default class Login extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Login</title>
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <a href="https://discordoauth2logintemplate.herokuapp.com/auth">
        <div class="border border-light p-3 mb-4">
          <div class = "text-center">
            <button type="button" class="btn btn-primary btn-lg">Login with Discord</button>
          </div>
        </div>
        </a>
      </div>
    );
  }
}
