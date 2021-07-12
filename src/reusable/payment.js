import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CFormText,
  CNavItem,
  CNavLink,
  CNav,
} from "@coreui/react";
import { apiDataPost } from "../Api/Api";
const Payment = (props) => {
  const [activeKey, setActiveKey] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const paymentAmount = props.location.state.detail;

  const redirectToZainCash = async () => {
    if (phone || email) {
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      const params = {
        amount: paymentAmount,
      };
      const response = await apiDataPost("payment", params);
      localStorage.setItem("token", response.data.token);
      window.open(response.data.url);
    } else {
      alert("Please enter one of the email or phone");
    }
  };

  return (
    <div class="d-flex justify-content-center" style={{ marginTop: "4%" }}>
      <CRow>
        <CCol xs={12}>
          <CCard
            className="mb-4"
            style={{ padding: 20, backgroundColor: "#eee" }}
          >
            <CNav
              variant="tabs"
              fill
              style={{
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#ddd",
                borderBottomWidth: 0,
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 3,
              }}
            >
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeKey === true}
                  onClick={() => setActiveKey(true)}
                >
                  Email
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeKey === false}
                  onClick={() => setActiveKey(false)}
                >
                  Phone
                </CNavLink>
              </CNavItem>
            </CNav>
            <br></br>

            {activeKey && (
              <CForm>
                <CFormGroup>
                  <CInput
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="Enter Email.."
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <CFormText className="help-block">
                    Please make sure to enter valid email address
                  </CFormText>
                </CFormGroup>
              </CForm>
            )}

            {!activeKey && (
              <CForm>
                <CFormGroup>
                  <CInput
                    type="phone"
                    id="nf-phone"
                    name="nf-phone"
                    placeholder="Enter Phone.."
                    autoComplete="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <CFormText className="help-block">
                    Please make sure to enter valid mobile number
                  </CFormText>
                </CFormGroup>
              </CForm>
            )}

            <center>
              <h3 style={{ color: "#CCA10C" }}>Choose Payment Method</h3>
            </center>
            <CCard className="mb-4">
              <CCardHeader>
                <center>
                  <strong>Credit or Debit Card</strong>
                </center>
              </CCardHeader>
              <CCardHeader>
                <center>
                  <strong>Fast Pay</strong>
                </center>
              </CCardHeader>
              <button onClick={redirectToZainCash}>
                <CCardHeader>
                  <center>
                    <strong>Zain Cash</strong>
                  </center>
                </CCardHeader>
              </button>
              <CCardHeader>
                <center>
                  <strong>Buy in Cash</strong>
                </center>
              </CCardHeader>
            </CCard>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Payment;
