import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Login from "../reusable/login";
import SignUp from "../reusable/signup";

const Auth = () => {
  return (
    <>
      <Tabs
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          padding: 10,
          borderBottom: 0,
        }}
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signup" title="Create Account">
          <SignUp />
        </Tab>
      </Tabs>
    </>
  );
};

export default Auth;
