import React, { useState, useEffect } from "react";
import { CCol, CRow, CButton } from "@coreui/react";
import axios from "axios";
import "../scss/lastCheck.css";

const lastCheckVinData = [
  {
    id: 1,
    vin: "dzfbg53t363-yf-ugfyf",
  },
  {
    id: 2,
    vin: "grertes34-yf-ugfyf",
  },
  {
    id: 3,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 4,
    vin: "047furvdds-yf-ugfyf",
  },
  {
    id: 5,
    vin: "0op402nf-yf-ugfyf",
  },
  {
    id: 6,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 7,
    vin: "dafafafdfda-yf-ugfyf",
  },
  {
    id: 8,
    vin: "1111111111-yf-ugfyf",
  },
  {
    id: 9,
    vin: "54674hgfhfg-yf-ugfyf",
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

  const callVin = (vin) => {
    console.log("VIN", vin);
  };

  const renderCard = (pacakage, index) => {
    return (
      <CButton
        color="link"
        onClick={() => callVin(pacakage.vin)}
        style={{ backgroundColor: "#fff00", color: "#fff" }}
      >
        {pacakage.vin}
      </CButton>
    );
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
