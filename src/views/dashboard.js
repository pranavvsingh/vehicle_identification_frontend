import React, { useReducer } from "react";
import { CContainer, CButton } from "@coreui/react";
import { Form, InputGroup } from "react-bootstrap";
import VinReport from "./VinReport";
import LastCheck from "../reusable/lastCheck.js";
import { dashboardReducer } from "../reducers/component-reducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  console.log(vin);
  return (
    <CContainer className="d-flex flex-column align-items-center mb-3 col-6">
      <CContainer>
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
      </CContainer>
      <CContainer className="d-flex justify-content-center p-0">
        <InputGroup>
          <Form.Control
            value={vin}
            size="lg"
            className="border-right-0 rounded-0 rounded-left-border flex-fill no-outline"
            placeholder="Enter VIN....."
            onChange={(e) =>
              dispatch({ type: "field", field: "vin", value: e.target.value })
            }
          />
          {vin && (
            <InputGroup.Text
              style={{cursor: 'pointer'}}
              className="bg-white border-left-0 rounded-0 text-dark font-weight-bold"
              onClick={() =>
                dispatch({ type: "field", field: "vin", value: "" })
              }
            >
              X
            </InputGroup.Text>
          )}
        </InputGroup>
        <CButton
          type="button"
          color="primary"
          onClick={callVin}
          className="rounded-0 rounded-right-border px-5"
        >
          Check
        </CButton>
      </CContainer>

      {visible && <VinReport vin={vin} />}

      {visibleLastCheck && <LastCheck />}
    </CContainer>
  );
};

export default Dashboard;
