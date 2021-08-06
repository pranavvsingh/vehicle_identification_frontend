import React, { useState, useEffect } from "react";
import { CRow, CButton, CContainer } from "@coreui/react";
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
    vin: "A47furvdds-yf-ugfyf",
  },
  {
    id: 5,
    vin: "Kop402nf-yf-ugfyf",
  },
  {
    id: 6,
    vin: "123903htf-yf-ugfyf",
  },
  {
    id: 7,
    vin: "dafaafdfda-yf-ugfyf",
  },
  {
    id: 8,
    vin: "JWSF-yfjg-ugfyfwx",
  },
  {
    id: 9,
    vin: "W74hfhfg-yf-ugfyf",
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
        key={index}
        onClick={() => callVin(pacakage.vin)}
        className="text-white font-weight-bold flex-fill"
      >
        {pacakage.vin.toUpperCase()}
      </CButton>
    );
  };

  return (
    <>
      <CContainer className="d-flex flex-column mt-5">
        <h3 className="text-white font-italic p-0">Last Checks</h3>
        <CRow className="red-gradient-background border border-dark rounded">
          {lastCheckData.map(renderCard)}
        </CRow>
      </CContainer>
    </>
  );
};

export default LastCheck;
