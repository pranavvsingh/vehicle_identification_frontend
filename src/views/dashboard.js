import React, { useState } from "react";
import { CFormGroup, CCol, CRow, CInputGroup, CInput, CInputGroupAppend, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import VinReport from "./VinReport";
import Api from "../Api/Api";
import LastCheck from "../reusable/lastCheck.js";
import { BiXCircle } from "react-icons";
import SearchBar from "material-ui-search-bar";

require("dotenv").config();

const Dashboard = () => {
  const [vin, setVin] = useState("");
  const [vinData, setVinData] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleLastCheck, setVisibleLastCheck] = useState(true);

  const handleVin = (e) => {
    setVin(e);
  };

  const callVinApi = async () => {
    setVinData(vin);
    setVisible(true);
    setVisibleLastCheck(false);
  };

  const clearVinApi = async () => {
    setVin("");
    setVinData("");
    setVisibleLastCheck(true);
    setVisible(false);
  };

  return (
    <>
      <h2 class="text-center"></h2>
      <h2 class="text-center">
        <i style={{ color: "#fff" }}>
          <strong>Best Website for Vehicle's Auction History Images</strong>
        </i>
      </h2>
      <br />
      <h3 class="text-center" style={{ color: "#fff" }}>
        <i style={{ color: "#fff" }}>
          <strong>Vehicle History Report by VIN</strong>
        </i>
      </h3>
      <br />
      <h4 class="text-center" style={{ color: "#fff" }}>
        <i>
          <strong>Never Trust Anyone When You Buy A Car.</strong>
        </i>
      </h4>
      <br />
      <div class="d-flex justify-content-center">
        <CCol md="4">
          <CInputGroup className="mb-12">
            <SearchBar value={vin} placeholder="Enter VIN....." onChange={handleVin} onCancelSearch={clearVinApi} />
            <CInputGroupAppend>
              <CButton type="button" color="primary" onClick={callVinApi}>
                Check
              </CButton>
            </CInputGroupAppend>
          </CInputGroup>
        </CCol>
      </div>

      {visible && <VinReport vin={vinData} />}

      {visibleLastCheck && <LastCheck />}
    </>
  );
};

export default Dashboard;
