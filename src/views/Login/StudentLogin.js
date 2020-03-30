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
import { auth, db } from "../../components/Firebase";
import { withRouter } from "react-router-dom";


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
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showingAlert: false,
  role: ""
};

class StudentLogin extends React.Component {

  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password, role } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password,role)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      
        history.push();
        
        
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //defined below
      });

    event.preventDefault();
  };

  

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {

    const { email, password, error, role, showingAlert } = this.state;
    const isInvalid = password === "" || email === ""|| role =="Advisor";

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent">
              <div className="text-center mt-2 ">
                Student
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
                    <Input placeholder="Email" type="email" autoComplete="new-email"
                    value={email}
                    onChange={event =>
                      this.setState(byPropKey("email", event.target.value))
                    }
                    
                    />
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
                
                <div className="text-center">
                <Button className="my-4" size="large" variant="contained" color="primary" raised component={Link} to="/student">
                    Sign in
                </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="./signup"
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default withRouter(StudentLogin);
