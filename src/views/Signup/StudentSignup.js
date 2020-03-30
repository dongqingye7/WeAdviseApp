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
import React,{Component} from "react";
import { Alert } from "reactstrap";
import { withRouter } from "react-router-dom";
import  routes from '../../routesAuth'
import { auth, db } from "../../components/Firebase";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
import {Link, Route} from "react-router-dom";

const INITIAL_STATE = {
  Firstname: "",
  Lastname:"",
  Major:"",
  Year_Started:"",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
  showingAlert: false,
  role: "Student",
  isAdvisor: false
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class StudentSignup extends React.Component {
    //defining state
    state = {
      ...INITIAL_STATE
    };
  
    
  
    onSubmit = event => {
  
      const { Firstname, Lastname,Major,Year_Started, email, passwordOne } = this.state;
      const { history } = this.props;
      const roles = {};
      
      auth
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        //it the above f unctions resolves, reset the state to its initial state values, otherwise, set the error object
        .then(authUser => {
          //creating a user in the database after the sign up through Firebase auth API
          db.doCreateUser(authUser.user.uid, Firstname,Lastname, Major, Year_Started, email, "Student")
            .then(() => {
              this.setState({
                ...INITIAL_STATE,
                roles
              });
              history.push(routes.StudentLogin); //redirects to Home Page
            })
            .catch(error => {
              this.setState(byPropKey("error", error));
              this.timer(); //show alert message for some seconds
            });
        })
        .catch(err => {
          this.setState(byPropKey("error", err));
          this.timer(); //show alert message for some seconds
        });
  
      event.preventDefault(); //prevents refreshing
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
    const {
      Firstname,
      Lastname,
      Major,
      Year_Started,
      email,
      passwordOne,
      passwordTwo,
      error,
      showingAlert      
    } = this.state;
    //a boolen to perform validation
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      Lastname === ""||
      Major == ""||
      Year_Started == ""||
      Firstname === "";
      

    return (
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent">
              <div className="text-center mt-2 ">
                Student
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign up with credentials</small>
              </div>
              <Form role="form" onSubmit={this.onSubmit}>
              <div>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}
        
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          
            <TextField
              variant="outlined"
              required
              fullWidth
              id="First Name"
              label = "First Name"
              name="firstname"
              autoComplete="fname"
              value={Firstname}
              onChange={e =>
                this.setState(byPropKey("Firstname", e.target.value))
              }
            />
            </Grid>

        <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={Lastname}
              onChange={e =>
                this.setState(byPropKey("Lastname", e.target.value))
              }
              />
            </Grid>  

          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Major"
                label="Major(CS,SE,CSE)"
                name="Major"
                autoComplete="Major"
                value={Major}
                onChange={e =>
                  this.setState(byPropKey("Major", e.target.value))
                }
              />
            </Grid>    

          <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="yearStarted"
                label="Year Started"
                name="yearStarted"
                autoComplete="yearStarted"
                value={Year_Started}
                onChange={e =>
                  this.setState(byPropKey("Year_Started", e.target.value))
                }
              />
            </Grid>  

            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="School Email Address"
              name="email"
              autoComplete="email"
              placeholder="user@mavs.uta.edu"
              value={email}
              onChange={e => this.setState(byPropKey("email", e.target.value))}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField

               variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              value={passwordOne}
              onChange={e =>
                this.setState(byPropKey("passwordOne", e.target.value))
              }
            />
          </Grid>
          <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="examplePassword2"
              placeholder="Confirm Password"
              value={passwordTwo}
              onChange={e =>
                this.setState(byPropKey("passwordTwo", e.target.value))
              }
            />
          </Grid>

          <div/> 
          </Grid>
          <div className="text-center">
            <Button disabled={isInvalid} type="submit" className="mt-4" size="large" variant="contained" color="primary" >
                Create account
            </Button>
           </div>
           </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
    );
  }
}

export default withRouter(StudentSignup);
