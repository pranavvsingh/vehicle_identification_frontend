import { Container, Row, Button, Table, Form } from "react-bootstrap";

const history = [
  {
    VIN: "1GFSIF54342FASDS1",
    Type: "Carfix",
    Date: "23-08-2020",
  },
  {
    VIN: "ADADSFSDER6DSF43",
    Type: "AutoCheck",
    Date: "14-03-2021",
  },
  {
    VIN: "2AFASFSDFSQW2211",
    Type: "Carfix",
    Date: "23-06-2021",
  },
  {
    VIN: "1QGFSIF54342FASDS1",
    Type: "Platinum Package",
    Date: "22-08-2021",
  },
  {
    VIN: "4SDFDSGADS132SA1",
    Type: "Carfix",
    Date: "22-10-2021",
  },
];

const PurchaseHistory = (props) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="text-center text-white mb-3">
          <h2>Purchase History</h2>
        </div>
      </Row>
      <Row>
        <Form.Control
          type="text"
          placeholder="Search by VIN"
          className="bg-white col-8 m-auto rounded"
        />
      </Row>
      <Row className="mt-3">
        <Table
          borderless
          className="col-8 m-auto text-white text-center border border-dark rounded black-gradient-background"
        >
          <thead className="border-bottom border-dark">
              <th>#</th>
              <th>VIN</th>
              <th>Type</th>
              <th>Date</th>
          </thead>
          <tbody>
            {history.map((record,index) => (
              <tr key={index} className="border-bottom border-dark red-hover" style={{cursor: 'pointer'}}>
                <td>{index+1}</td>
                <td>{record.VIN}</td>
                <td>{record.Type}</td>
                <td>{record.Date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row className="mt-2">
        <Button className="black-gradient-background text-primary col-8 m-auto border-dark font-weight-bold">Show More</Button>
      </Row>
    </Container>
  );
};

export default PurchaseHistory;
