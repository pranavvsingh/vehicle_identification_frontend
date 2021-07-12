import React, { Component } from "react";
import { CCol, CCard } from "@coreui/react";

export default class signup extends Component {
  render() {
    return (
      <CCol md="12">
        <div class="d-flex justify-content-center">
          <CCol md="4">
            <CCard style={{ padding: 20 }}>
              <form>
                <h3>Sign In</h3>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
                <p className="forgot-password text-right">
                  <a href="#">Forgot password?</a>
                </p>
              </form>
            </CCard>
          </CCol>
        </div>
      </CCol>
    );
  }
}
