import React, { Component } from "react";
import { CCol, CCard } from "@coreui/react";
import { Form, Button} from "react-bootstrap";

export default class Login extends Component {
  render() {
    return (
      <CCol md="12">
        <div className="d-flex justify-content-center">
          <CCol md="4">
            <CCard style={{ padding: 20 }} className="bg-transparent border-0">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                  Log in
                </Button>
              </Form>
            </CCard>
          </CCol>
        </div>
      </CCol>
    );
  }
}
