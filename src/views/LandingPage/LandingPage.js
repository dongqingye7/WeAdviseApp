import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";



class LandingPage extends React.Component {
    render() { 
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col lg="5" md="6">
                        <Button style={{margin: "50px"}}
                            size="large"
                            variant="contained" 
                            component={Link}
                            raised
                            to="/auth/advisor/login"
                        >
                            Advisor
                        </Button>
                        <Button
                            style={{margin: "50px"}}
                            size="large"
                            variant="contained" 
                            component={Link}
                            raised
                            to="/auth/student/login"
                        >
                            Student
                        </Button>
                        <Col md={3}></Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default LandingPage;