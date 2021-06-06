import React, { useState, useEffect } from "react";
import { CCol, CRow, CCard, CCardHeader, CCardBody, CCardFooter, CCardTitle } from "@coreui/react";
import axios from "axios";
import "../scss/lastCheck.css";

const lastCheckVinData = [
  {
    id: 1,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 2,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 3,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 4,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 5,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 6,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 7,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 8,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 9,
    vin: "123903htf-yf-ugfyf",
  },
];

const LastCheck = () => {
  const [lastCheckData, setLastCheckData] = useState([]);

  const getLastCheckData = () => {
    setLastCheckData(lastCheckVinData);
  };

  useEffect(() => {
    getLastCheckData();
  });

  const renderCard = (pacakage, index) => {
    return <CCardTitle style={{ backgroundColor: "#fff00", margin: 10, color: "#fff" }}>{pacakage.vin}</CCardTitle>;
  };

  return (
    <>
      <div class="d-flex justify-content-center" style={{ marginTop: "4%" }}>
        <CCol sm="6">
          <h3 style={{ color: "#fff" }}>
            <i>
              <strong>Last Checks</strong>
            </i>
          </h3>
          <CRow xs={4}>{lastCheckData.map(renderCard)}</CRow>
        </CCol>
      </div>
    </>
  );
};

export default LastCheck;
