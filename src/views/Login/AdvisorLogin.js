import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';

class AdvisorLogin extends React.Component {
    render() {
      return (
        <>
          <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-transparent">
                <div className="text-center mt-2 ">
                    Advisor
                </div>
                </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" autoComplete="new-email"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" autoComplete="new-password"/>
                    </InputGroup>
                  </FormGroup>
                  {/* <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div> */}
                  <div className="text-center">
                  <Button className="my-4" size="large" variant="contained" color="primary" raised component={Link} to="/advisor">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              {/* <Col xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <small>Forgot password?</small>
                </a>
              </Col> */}
              {/* <Col className="text-right" xs="6">
                <a
                  className="text-light"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <small>Create new account</small>
                </a>
              </Col> */}
            </Row>
          </Col>
        </>
      );
    }
  }
  
  export default AdvisorLogin;
  