import React, { useState, useEffect } from "react";
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import axios from "axios";

const Dashboard = () => {
  const [smartPhoneData, setSmartPhoneData] = useState("");
  const [pcData, setPcData] = useState("");

  const getSmartPhoneData = () => {
    setSmartPhoneData("This IS setSmartPhoneData");
  };

  const getPcData = () => {
    setPcData("This Is pcData");
  };

  useEffect(() => {
    getSmartPhoneData();
    getPcData();
  });

  return (
    <>
      <CTabs activeTab="smartphone">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="smartphone">Smart Phone</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="pc">PC</CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="smartphone">{smartPhoneData}</CTabPane>
          <CTabPane data-tab="pc">{pcData}</CTabPane>
        </CTabContent>
      </CTabs>
    </>
  );
};

export default Dashboard;
