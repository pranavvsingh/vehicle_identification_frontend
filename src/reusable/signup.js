import React, { Component } from "react";
import { CCol, CCard } from "@coreui/react";
import { Form, Button} from "react-bootstrap";

export default class signup extends Component {
  render() {
    return (
      <CCol md="12">
        <div class="d-flex justify-content-center">
          <CCol md="4">
            <CCard style={{ padding: 20 }} className="black-gradient-background border-0">
            <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select">
                    <option selected disabled>Select Country</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                    <option value="Canada">Canada</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Mobile Number" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password again" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                  Sign up
                </Button>
              </Form>
            </CCard>
          </CCol>
        </div>
      </CCol>
    );
  }
}
