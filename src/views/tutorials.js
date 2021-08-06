import React, { useState, useEffect } from "react";
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";

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
    <div className="tutorial-container">
       <div className="text-center text-white mb-5">
        <h2>Tutorials</h2>
        </div>
      <CTabs activeTab="smartphone">
        <CNav variant="tabs" className="border tabs border-dark">
          <CNavItem className="font-weight-bold flex-fill">
            <CNavLink data-tab="smartphone" className="rounded-0">Smart Phone</CNavLink>
          </CNavItem>
          <CNavItem className="font-weight-bold flex-fill">
            <CNavLink data-tab="pc" className="rounded-0">PC</CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="container mt-5">
          <CTabPane data-tab="smartphone" className="text-white">{smartPhoneData}</CTabPane>
          <CTabPane data-tab="pc" className="text-white">{pcData}</CTabPane>
        </CTabContent>
      </CTabs>
    </div>
  );
};

export default Dashboard;
