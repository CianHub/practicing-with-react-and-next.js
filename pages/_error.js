import React, { Component } from "react";
import Link from "next/link";

class errorPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    return {};
  }

  render() {
    return (
      <div>
        <h1>Oops</h1>
        <p>
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default errorPage;
