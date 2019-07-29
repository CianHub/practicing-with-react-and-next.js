import React from "react";
import Link from "next/link";
import User from "../../components/user/user";

const authIndexPage = props => {
  console.log(props.appNameAuth);
  return (
    <div>
      <h1>Auth</h1>
      <User name="Cian" age={27} />
      <p>
        <Link href="/">
          <a>Main</a>
        </Link>
      </p>
    </div>
  );
};

authIndexPage.getInitialProps = context => {
  return { appNameAuth: "Super App" };
};

export default authIndexPage;
