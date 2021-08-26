import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfoResponse: "" };
  }

  callAPI() {
    fetch("https://discordoauth2logintemplate.herokuapp.com/userInfo")
      .then((res) => res.json())
      .then((res) => this.setState({ userInfoResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <title>Sample Site</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: "\n        body { padding-top: 50px; }\n    ",
          }}
        />
        <div className="container">
          <div className="jumbotron">
            <h1>
              Welcome to the home page {this.state.userInfoResponse.username}#{this.state.userInfoResponse.discriminator}!
              <img src = {"https://cdn.discordapp.com/avatars/" + this.state.userInfoResponse.discordId + "/" + this.state.userInfoResponse.avatar + ".png"} />
            </h1>
            <a href="https://discordoauth2logintemplate.herokuapp.com/auth/logout">
              <button>Logout</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
