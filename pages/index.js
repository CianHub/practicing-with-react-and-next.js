import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class indexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    return { appName: "Super App" };
  }
  render() {
    console.log(this.props.appName);
    return (
      <div>
        <h1>Main</h1>
        <p>
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          <button onClick={() => Router.push("/auth")}>Go To Auth</button>
        </p>
        <style jsx>
          {`
            div {
              border: 1px solid black;
            }
          `}
        </style>
      </div>
    );
  }
}

export default indexPage;
