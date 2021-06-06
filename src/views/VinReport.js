import React, { useState, useEffect } from "react";
import RenderHTML from "react-render-html";
import { CCol, CRow, CCard, CCardHeader, CCardBody, CCardFooter, CButton } from "@coreui/react";
import { apiData } from "../Api/Api";
require("dotenv").config();

const VinReport = (props) => {
  const [vinReportData, setVinReportData] = useState("");
  const [checkAutoCheckResponseData, setCheckAutoCheckResponse] = useState(false);
  const [checkCarafaxResponseData, setCheckCarafaxResponse] = useState(false);
  const [checkPhotoResponseData, setCheckPhotoResponse] = useState(false);

  const getReportData = async () => {
    if (props.vin) {
      const checkAutoCheckUrl = "check_autocheck" + "?vincode=" + props.vin;
      const checkAutoCheckResponse = await apiData(checkAutoCheckUrl);

      if (checkAutoCheckResponse.data && checkAutoCheckResponse.data.message === "Report found") {
        setCheckAutoCheckResponse(true);
      } else {
      }

      const checkCarafaxUrl = "check_carafax" + "?vincode=" + props.vin;
      const checkCarafaxResponse = await apiData(checkCarafaxUrl);

      if (checkCarafaxResponse.data && checkCarafaxResponse.data.message === "Report found") {
        setCheckCarafaxResponse(true);
      } else {
      }

      const checkPhotoUrl = "check_photo" + "?vincode=" + props.vin;
      const checkPhotoResponse = await apiData(checkPhotoUrl);

      if (checkPhotoResponse.data && checkPhotoResponse.data.message === "Report found") {
        setCheckPhotoResponse(true);
      } else {
      }
    }
  };

  useEffect(() => {
    getReportData();
  });

  return (
    <>
      <div class="d-flex justify-content-center" style={{ marginTop: "2%" }}>
        <CCol>
          <h5 style={{ color: "#fff" }} class="text-center">
            You will be automatically redirected to the report page within Few Seconds after payment
          </h5>
          <br />
          <h5 style={{ color: "#fff" }} class="text-center">
            Please do NOT close the payment page
          </h5>
          <br />
          <h5 style={{ color: "#fff" }} class="text-center">
            The report link will be sent to your Mobile Number or Email Address.
          </h5>
        </CCol>
      </div>
      <div class="d-flex justify-content-center" style={{ marginTop: "1%" }}>
        <CRow>
          {checkAutoCheckResponseData && (
            <CCol sm="4">
              <CCard className="mb-4" style={{ width: "12rem", margin: "2rem" }}>
                <CCardHeader style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>
                  <strong>Carfax</strong>
                </CCardHeader>
                <CCardBody style={{ color: "#3346FF", fontSize: "1.2em" }}>Records Available</CCardBody>
                <CButton style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>Buy Now $4.49</CButton>
              </CCard>
            </CCol>
          )}

          {checkCarafaxResponseData && (
            <CCol sm="4">
              <CCard className="mb-4" style={{ width: "12rem", margin: "2rem" }}>
                <CCardHeader style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>
                  <strong>Autocheck</strong>
                </CCardHeader>
                <CCardBody style={{ color: "#3346FF", fontSize: "1.2em" }}>Records Available</CCardBody>
                <CButton style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>Buy Now $4.49</CButton>
              </CCard>
            </CCol>
          )}

          {checkPhotoResponseData && (
            <CCol sm="4">
              <CCard className="mb-4" style={{ width: "12rem", margin: "2rem" }}>
                <CCardHeader style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>
                  <strong>Auction Image</strong>
                </CCardHeader>
                <CCardBody style={{ color: "#3346FF", fontSize: "1.2em" }}>Records Available</CCardBody>
                <CButton style={{ backgroundColor: "#3346FF", color: "#fff", fontWeights: "bold", fontSize: "1.5em" }}>Buy Now $5.99</CButton>
              </CCard>
            </CCol>
          )}
        </CRow>
      </div>
    </>
  );
};

export default VinReport;
