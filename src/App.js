import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";

class App extends Component {
  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src =
      "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e) {
    e.preventDefault();
    window.OAuth.initialize("hyF0A_hupmp6yLE-_6GiblMsF7Y");
    window.OAuth.popup("github").done(function(result) {
      console.log(result);
      result.me().done(function(data) {
        alert("Github:" + "\n" + "Name:" + " " + data.name);
      });
    });
  }
  handleClick1(e) {
    e.preventDefault();
    window.OAuth.initialize("hyF0A_hupmp6yLE-_6GiblMsF7Y");
    window.OAuth.popup("facebook").done(function(result) {
      console.log(result);
      result.me().done(function(data) {
        alert("Facebook:" + "\n" + "Name:" + " " + data.name);
      });
    });
  }
  handleClick2(e) {
    window.OAuth.initialize("hyF0A_hupmp6yLE-_6GiblMsF7Y");
    window.OAuth.popup("google").done(function(result) {
      console.log(result);
      result.me().done(function(data) {
        alert("Google login successfully");
      });
    });
  }
  handleClick3(e) {
    window.OAuth.initialize("hyF0A_hupmp6yLE-_6GiblMsF7Y");
    window.OAuth.popup("twitter").done(function(result) {
      console.log(result);
      result.me().done(function(data) {
        alert("Twitter:" + "\n" + "Name:" + " " + data.name);
      });
    });
  }
  handleClick4(e) {
    window.OAuth.initialize("hyF0A_hupmp6yLE-_6GiblMsF7Y");
    window.OAuth.popup("linkedin").done(function(result) {
      console.log(result);
      result.me().done(function(data) {
        alert("Linkedin:" + "\n" + "Name:" + " " + data.name);
      });
    });
  }
  render() {
    return (
      <div>
        <div
          style={{ marginTop: "15%", textAlign: "center" }}
          className="container"
        >
          <button
            onClick={this.handleClick.bind(this)}
            className="btn btn-social btn-github"
          >
            <span className="fa fa-github"></span> Sign in with Github
          </button>
          <br></br>
          <button
            onClick={this.handleClick1.bind(this)}
            className="btn btn-social btn-facebook"
          >
            <span className="fa fa-facebook"></span> Sign in with Facebook
          </button>
          <br></br>
          <button
            onClick={this.handleClick2.bind(this)}
            className="btn btn-social btn-google"
          >
            <span className="fa fa-google"></span> Sign in with Google
          </button>
          <br></br>
          <button
            onClick={this.handleClick3.bind(this)}
            className="btn btn-social btn-twitter"
          >
            <span className="fa fa-twitter"></span> Sign in with Twitter
          </button>
          <br></br>
          <button
            onClick={this.handleClick4.bind(this)}
            className="btn btn-social btn-linkedin"
          >
            <span className="fa fa-linkedin"></span> Sign in with Linkedin
          </button>
        </div>
      </div>
    );
  }
}

export default App;
