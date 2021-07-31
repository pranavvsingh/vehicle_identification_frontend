import React from "react";
import { Container, Form, Card, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

const Profile = (props) => {
  const [isMobileFieldDisabled, setMobileField] = useState(true);

  return (
    <Container className="d-flex flex-column col-4 mx-auto">
      <div className="text-center text-white mb-5">
        <h2>Profile</h2>
      </div>
      <Card
        style={{ padding: 20 }}
        className="black-gradient-background border-0 text-white"
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" disabled value="abc@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" defaultValue="America">
              <option disabled>Select Country</option>
              <option value="India">India</option>
              <option value="America">
                America
              </option>
              <option value="Canada">Canada</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                defaultValue="+12 3123124321"
                className="border-right-0"
                disabled={isMobileFieldDisabled}
              />
              {isMobileFieldDisabled && (
                <InputGroup.Text
                  className="text-primary bg-light border-left-0 rounded-0 rounded-right-border"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setMobileField(false);
                  }}
                >
                  Edit
                </InputGroup.Text>
              )}
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-block">
            Save Changes
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Profile;
