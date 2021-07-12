import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import { apiData } from "../Api/Api";
require("dotenv").config();

const VinReport = (props) => {
  const [checkAutoCheckResponseData, setCheckAutoCheckResponse] =
    useState(false);
  const [checkCarafaxResponseData, setCheckCarafaxResponse] = useState(false);
  const [checkPhotoResponseData, setCheckPhotoResponse] = useState(false);
  const [autcheckCheck, setautcheckCheck] = useState(false);
  const [carafaxCheck, setcarafaxCheck] = useState(false);
  const [imageCheck, setimageCheck] = useState(false);
  const history = useHistory();

  const getReportData = async () => {
    if (props.vin) {
      const checkAutoCheckUrl = "check_autocheck" + "?vincode=" + props.vin;
      const checkAutoCheckResponse = await apiData(checkAutoCheckUrl);
      if (
        checkAutoCheckResponse &&
        checkAutoCheckResponse.data &&
        checkAutoCheckResponse.data.message === "Report found"
      ) {
        setCheckAutoCheckResponse(true);
      } else {
      }

      const checkCarafaxUrl = "check_carafax" + "?vincode=" + props.vin;
      const checkCarafaxResponse = await apiData(checkCarafaxUrl);

      if (
        checkAutoCheckResponse &&
        checkCarafaxResponse.data &&
        checkCarafaxResponse.data.message === "Report found"
      ) {
        setCheckCarafaxResponse(true);
      } else {
      }

      const checkPhotoUrl = "check_photo" + "?vincode=" + props.vin;
      const checkPhotoResponse = await apiData(checkPhotoUrl);

      if (
        checkAutoCheckResponse &&
        checkPhotoResponse.data &&
        checkPhotoResponse.data.message === "Report found"
      ) {
        setCheckPhotoResponse(true);
      } else {
      }
    }
  };

  useEffect(() => {
    getReportData();
  });

  const payForImageReport = () => {
    var paymentAmount = 0;
    if (autcheckCheck && imageCheck && carafaxCheck) {
      paymentAmount = 13.48;
    } else if (autcheckCheck && carafaxCheck) {
      paymentAmount = 8.08;
    } else if ((autcheckCheck && imageCheck) || (carafaxCheck && imageCheck)) {
      paymentAmount = 9.43;
    } else if (autcheckCheck || carafaxCheck) {
      paymentAmount = 4.59;
    } else if (imageCheck) {
      paymentAmount = 5.59;
    }
    history.push({
      pathname: "/payment",
      state: { detail: paymentAmount },
    });
  };

  const Get10perdiscout = () => {
    return (
      <>
        <div class="d-flex justify-content-center">
          <p style={{ color: "#fff" }}>Buy 2 reports and get 10% off</p>
        </div>
      </>
    );
  };

  const moneyCalulate = () => {
    if (autcheckCheck && imageCheck && carafaxCheck) {
      localStorage.setItem("autocheck", "1");
      localStorage.setItem("image", "1");
      localStorage.setItem("carafax", "1");
      return "Buy now $13.48";
    } else if (autcheckCheck && carafaxCheck) {
      localStorage.setItem("autocheck", "1");
      localStorage.setItem("carafax", "1");
      localStorage.setItem("image", "0");
      return "Buy now $8.08";
    } else if ((autcheckCheck && imageCheck) || (carafaxCheck && imageCheck)) {
      if (autcheckCheck && imageCheck) {
        localStorage.setItem("autocheck", "1");
        localStorage.setItem("image", "1");
        localStorage.setItem("carafax", "0");
      } else if (carafaxCheck && imageCheck) {
        localStorage.setItem("autocheck", "0");
        localStorage.setItem("carafax", "1");
        localStorage.setItem("image", "1");
      }
      return "Buy now $9.43";
    } else if (autcheckCheck || carafaxCheck) {
      localStorage.setItem("autocheck", "1");
      localStorage.setItem("carafax", "1");
      localStorage.setItem("image", "0");
      return "Buy now $4.49";
    } else if (imageCheck) {
      localStorage.setItem("image", "1");
      localStorage.setItem("autocheck", "0");
      localStorage.setItem("carafax", "0");
      return "Buy now $5.59";
    }
  };

  return (
    <>
      <div class="d-flex justify-content-center" style={{ marginTop: "2%" }}>
        <CCol>
          <h6 style={{ color: "#fff" }} class="text-center">
            You will be automatically redirected to the report page within Few
            Seconds after payment
          </h6>
          <h6 style={{ color: "#fff" }} class="text-center">
            Please do NOT close the payment page
          </h6>
          <h6 style={{ color: "#fff" }} class="text-center">
            The report link will be sent to your Mobile Number or Email Address.
          </h6>
        </CCol>
      </div>
      <div class="d-flex justify-content-center" style={{ marginTop: "1%" }}>
        <CRow>
          {checkAutoCheckResponseData && (
            <CCol sm="4">
              <CCard
                className="mb-4"
                style={{ width: "12rem", margin: "2rem" }}
              >
                <CCardHeader
                  style={{
                    backgroundColor: "#3346FF",
                    color: "#fff",
                    fontWeights: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  <strong>Carfax</strong>
                </CCardHeader>
                <CCardBody style={{ color: "#3346FF", fontSize: "1.1em" }}>
                  Records Available
                </CCardBody>
                <div
                  class="d-flex justify-content-center"
                  style={{ padding: 10, backgroundColor: "#3346FF" }}
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="autocheck"
                      id="autocheck"
                      onChange={(e) => {
                        setautcheckCheck(e.target.checked);
                      }}
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      style={{ color: "#fff" }}
                    >
                      Buy now $4.49
                    </label>
                  </div>
                </div>
              </CCard>
            </CCol>
          )}

          {checkCarafaxResponseData && (
            <CCol sm="4">
              <CCard
                className="mb-4"
                style={{ width: "12rem", margin: "2rem" }}
              >
                <CCardHeader
                  style={{
                    backgroundColor: "#3346FF",
                    color: "#fff",
                    fontWeights: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  <strong>Autocheck</strong>
                </CCardHeader>
                <CCardBody style={{ color: "#3346FF", fontSize: "1.1em" }}>
                  Records Available
                </CCardBody>
                <div
                  class="d-flex justify-content-center"
                  style={{ padding: 10, backgroundColor: "#3346FF" }}
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="carafax"
                      id="carafax"
                      onChange={(e) => {
                        setcarafaxCheck(e.target.checked);
                      }}
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      style={{ color: "#fff" }}
                    >
                      Buy now $4.49
                    </label>
                  </div>
                </div>
              </CCard>
            </CCol>
          )}

          {checkPhotoResponseData && (
            <CCol sm="4">
              <CCard
                className="mb-4"
                style={{ width: "12rem", margin: "2rem" }}
              >
                <CCardHeader
                  style={{
                    backgroundColor: "#3346FF",
                    color: "#fff",
                    fontWeights: "bold",
                    fontSize: "1.2em",
                  }}
                >
                  <strong>Auction Image</strong>
                </CCardHeader>

                <img
                  style={{ height: 65, width: 200 }}
                  src="https://previews.123rf.com/images/bigtunaonline/bigtunaonline1710/bigtunaonline171000243/88655949-blurred-background-with-modern-luxury-car-on-the-blur-roof-of-the-building-at-the-sunset-modern-car-.jpg"
                  class="img-fluid"
                  alt="Responsive image"
                />

                <div
                  class="d-flex justify-content-center"
                  style={{ padding: 10, backgroundColor: "#3346FF" }}
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="image"
                      id="image"
                      onChange={(e) => {
                        setimageCheck(e.target.checked);
                      }}
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      style={{ color: "#fff" }}
                    >
                      Buy now $5.99
                    </label>
                  </div>
                </div>
              </CCard>
            </CCol>
          )}
          <CCol>
            <div>
              {(autcheckCheck || carafaxCheck || imageCheck) && (
                <Get10perdiscout />
              )}
            </div>
            {(autcheckCheck || carafaxCheck || imageCheck) && (
              <CCol>
                <CButton
                  class="btn btn-primary rounded-0"
                  style={{
                    backgroundColor: "#25C2B1",
                    color: "#fff",
                    fontWeights: "bold",
                    fontSize: "1.2em",
                    marginBottom: 10,
                  }}
                >
                  {moneyCalulate()}
                </CButton>
                <CButton
                  class="btn btn-primary rounded-0"
                  style={{
                    backgroundColor: "#3346FF",
                    color: "#fff",
                    fontWeights: "bold",
                    fontSize: "1.2em",
                    marginBottom: 10,
                  }}
                  onClick={payForImageReport}
                >
                  Payment
                </CButton>
              </CCol>
            )}
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default VinReport;
