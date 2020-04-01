/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from "reactstrap";

const UserInfo={
  utaID: 0,
  firstName: "John",
  lastName: "Smith",
  major: "Computer Science",
  yearAttend: "2016"
}
const appiontment="Dr. Conly 1pm to 3pm";
const appiontmentLocation="ERB 642";
const appiontmentTime="Tuesday, Feb 25, 2020"
const queueNumber=12;
const queueUser=5;


class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h3"
                            className="text-uppercase mb-2"
                          >
                            My Information
                          </CardTitle>
                          
                            <div className="h5 font-weight-bold mb-0">
                              <p>Name: {UserInfo.firstName+" "+UserInfo.lastName}
                              <br />Major: {UserInfo.major}
                              <br />Year: {UserInfo.yearAttend}
                              </p>
                            </div>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-primary text-white rounded-circle shadow icon-lg">
                            <i className="fas fa-address-card" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h3"
                            className="text-uppercase mb-2"
                          >
                            My Appiontment
                          </CardTitle>
                          
                          {/* <div className="h5 font-weight-bold mb-0">
                              <p>You don't have any appiontment today.
                              <br />
                              <br />
                              </p>
                          </div> */}
                          <div className="h5 font-weight-bold mb-0">
                              <p>{appiontment}
                              <br />{appiontmentTime}
                              <br />Location: {appiontmentLocation} 
                              </p>
                          </div>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow icon-lg">
                            <i className="fas fa-calendar-check" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                        <CardTitle
                            tag="h3"
                            className="text-uppercase mb-2"
                          >
                            Current Queue
                        </CardTitle>
                        <div className="h5 font-weight-bold mb-0">
                              <p>There are {queueNumber} people waiting.
                              <br />
                              <br />You are at {queueUser}.
                              <br />
                              </p>
                            </div>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow icon-lg">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
