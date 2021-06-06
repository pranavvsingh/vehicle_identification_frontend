import React, { useState } from "react";
import { CFormGroup, CCol, CRow, CInputGroup, CInput, CInputGroupAppend, CButton } from "@coreui/react";
import axios from "axios";

const Dashboard = () => {
  const [vin, setVin] = useState("");
  const [vinData, setVinData] = useState("");

  const handleVin = (e) => {
    setVin(e.target.value);
  };

  const callVinApi = async () => {
    // console.log(vin);
    // const url = "https://192.163.4.6/api/getVin" + "&vincode=" + vin;
    // const response = await axios.get(url);
    // setVinData(response);
  };

  return (
    <>
      <h2 class="text-center">Never Trust Anyone When You Buy A Car.</h2>
      <h2 class="text-center">Best Website for Vehicle's Auction History Images</h2>
      <br />
      <h3 class="text-center">Vehicle History Report by VIN</h3>
      <div class="d-flex justify-content-center">
        <CFormGroup row>
          <CCol md="12">
            <CInputGroup>
              <CInput type="vin" id="input2-group2" name="input2-group2" placeholder="Enter VIN....." onChange={handleVin} />
              <CInputGroupAppend>
                <CButton type="button" color="primary" onClick={callVinApi}>
                  Check
                </CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CFormGroup>
      </div>
    </>
  );
};

export default Dashboard;
