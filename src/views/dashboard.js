import React, { useReducer } from "react";
import { CCol, CInputGroup, CInputGroupAppend, CButton } from "@coreui/react";
import VinReport from "./VinReport";
import LastCheck from "../reusable/lastCheck.js";
import SearchBar from "material-ui-search-bar";
import { dashboardReducer } from "../reducers/component-reducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cibWindows } from "@coreui/icons";
import { apiDataPost } from "src/Api/Api";

const initialState = {
  vin: "",
  vinData: "",
  visible: false,
  visibleLastCheck: true,
};

const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const { vin, visible, visibleLastCheck } = state;
  const reduxDispatch = useDispatch();
  const history = useHistory();

  const callVin = async () => {
    localStorage.setItem("vin", vin);
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    let payment = 0;
    let autcheckCheck = 0;
    let imageCheck = 0;
    let carafaxCheck = 0;
    if (email || phone) {
      const data = {
        email,
        phone,
      };
      const paymentStatus = await apiDataPost("get_payment", data);
      console.log("paymenet Status:", paymentStatus);
      if (paymentStatus) {
        payment = paymentStatus.data.data[0].payment;
        autcheckCheck = paymentStatus.data.data[0].autocheck;
        imageCheck = paymentStatus.data.data[0].image;
        carafaxCheck = paymentStatus.data.data[0].carafax;
      }
    }

    if (payment === 1) {
      console.log(autcheckCheck, imageCheck, carafaxCheck);
      reduxDispatch({ type: "success", data: "success" });
      if (autcheckCheck == 1 && imageCheck == 1 && carafaxCheck == 1) {
        window.open("http://localhost:3000/#/autocheck/");
        window.open("http://localhost:3000/#/carfax/");
        window.open("http://localhost:3000/#/image/");
      } else if (autcheckCheck == 1 && carafaxCheck == 1) {
        window.open("http://localhost:3000/#/autocheck/");
        window.open("http://localhost:3000/#/carfax/");
      } else if (autcheckCheck == 1 && imageCheck == 1) {
        window.open("http://localhost:3000/#/autocheck/");
        window.open("http://localhost:3000/#/image/");
      } else if (carafaxCheck == 1 || imageCheck == 1) {
        window.open("http://localhost:3000/#/image/", "2");
        window.open("http://localhost:3000/#/carfax/", "1");
      } else if (imageCheck == 1) {
        window.open("http://localhost:3000/#/image/");
      } else if (autcheckCheck == 1) {
        window.open("http://localhost:3000/#/autocheck/");
      } else if (carafaxCheck == 1) {
        window.open("http://localhost:3000/#/carfax/");
      }
    } else {
      dispatch({ type: "call_vin" });
      reduxDispatch({ type: "failure", data: "failure" });
    }
  };

  return (
    <>
      <h3 class="text-center">
        <i style={{ color: "#fff" }}>
          <strong>Best Website for Vehicle's Auction History Images</strong>
        </i>
      </h3>
      <h4 class="text-center" style={{ color: "#fff" }}>
        <i style={{ color: "#fff" }}>
          <strong>Vehicle History Report by VIN</strong>
        </i>
      </h4>
      <h4 class="text-center" style={{ color: "#fff" }}>
        <i>
          <strong>Never Trust Anyone When You Buy A Car.</strong>
        </i>
      </h4>
      <br />
      <div class="d-flex justify-content-center">
        <CCol md="4">
          <CInputGroup className="mb-12">
            <SearchBar
              value={vin}
              placeholder="Enter VIN....."
              onChange={(e) =>
                dispatch({ type: "field", field: "vin", value: e })
              }
              onCancelSearch={() => dispatch({ type: "clear_vin_data" })}
            />
            <CInputGroupAppend>
              <CButton type="button" color="primary" onClick={callVin}>
                Check
              </CButton>
            </CInputGroupAppend>
          </CInputGroup>
        </CCol>
      </div>

      {visible && <VinReport vin={vin} />}

      {visibleLastCheck && <LastCheck />}
    </>
  );
};

export default Dashboard;
