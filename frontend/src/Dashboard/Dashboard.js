import NavForDash from './NavForDash'
import { React,useState,useEffect } from "react";
import http from "../Config";
import { Container, Card, Row } from "react-bootstrap";
export default function RPDashboard() {

  const [data, setData] = useState({});
  const [Candi, setCandiData] = useState({});
  const [TotalCandiatdate, setTotalCandiatdate] = useState({});
  useEffect(() => {
    
  const getData = () => {
    const headers = { "Content-Type": "application/json" };
    const endpoint = "/user/get-account";
    http.get(endpoint, { headers })
      .then((response) => {
        setData({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
let approvedlist = [];
  const getCandidatesData = () => {
    const headers = { "Content-Type": "application/json" };
    const endpoint = "/candidate/get_candidates";
    http.get(endpoint, { headers })
      .then((response) => {
        response.data.forEach(element => {
          if(element.status === 'approved') {
            approvedlist.push(element);
          }
        });
        setCandiData(approvedlist);
        setTotalCandiatdate( response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }; 
    getData();
    getCandidatesData();
  }, []);

  return (
    <Container fluid>
      <NavForDash/>
      <section>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
            <Row>
              <h3>DashBoard:</h3>
            </Row>
          <Row style={{textAlign:`center`}}>
            <div className="col-lg-4 col-sm-6">
              <Card bg="success" border="success" text="white" className="mb-2">
                <Card.Header>Country</Card.Header>
                <Card.Body>
                  <Card.Title>{data.data ? data.data.length : 0 }</Card.Title>
                  <Card.Text>Regsitered Countries</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card bg="light" border="light" text="dark" className="mb-2">
                <Card.Header>Total Students</Card.Header>
                <Card.Body>
                  <Card.Title>{TotalCandiatdate ? TotalCandiatdate.length : 0 }</Card.Title>
                  <Card.Text>Register Students</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card bg="info" border="info" text="light" className="mb-2">
                <Card.Header>Universities </Card.Header>
                <Card.Body>
                  <Card.Title>{Candi ? Candi.length : 0 }</Card.Title>
                  <Card.Text>Total Universities</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
          </Row>
          <Row style={{textAlign:`center`}}>
          <div className="col-lg-4 col-sm-6">
              <Card bg="Primary" border="Primary" text="dark" className="mb-2">
                <Card.Header>Appointments </Card.Header>
                <Card.Body>
                  <Card.Title>{Candi ? Candi.length : 0 }</Card.Title>
                  <Card.Text>Confirm Appointments</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card bg="info" border="info" text="light" className="mb-2">
                <Card.Header>FAQS </Card.Header>
                <Card.Body>
                  <Card.Title>{Candi ? Candi.length : 0 }</Card.Title>
                  <Card.Text>FAQ Records</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card bg="success" border="success" text="light" className="mb-2">
                <Card.Header>Appointments </Card.Header>
                <Card.Body>
                  <Card.Title>{Candi ? Candi.length : 0 }</Card.Title>
                  <Card.Text>Confirm Appointments</Card.Text>
                </Card.Body>
                <Card.Footer>View More</Card.Footer>
              </Card>
            </div>
          </Row>
        </div>
      </section>
    </Container>
  );
}
