import React from "react";
//import { Tabs, Tab } from "react-bootstrap";
import Login from "../reusable/login";
import SignUp from "../reusable/signup";
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";

const Auth = () => {
  return (
    <CTabs activeTab="login">
        <CNav variant="tabs" className="border tabs border-dark auth-container mt-5">
          <CNavItem className="font-weight-bold flex-fill">
            <CNavLink data-tab="login" className="rounded-0">Log in</CNavLink>
          </CNavItem>
          <CNavItem className="font-weight-bold flex-fill">
            <CNavLink data-tab="signup" className="rounded-0">Create Account</CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="container mt-5">
          <CTabPane data-tab="login" className="text-white"><Login/></CTabPane>
          <CTabPane data-tab="signup" className="text-white"><SignUp/></CTabPane>
        </CTabContent>
      </CTabs>
  );
};

export default Auth;
