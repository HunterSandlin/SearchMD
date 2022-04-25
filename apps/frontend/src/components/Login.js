import React from 'react';
import {Button, Row, Col, Container, Form, Card} from 'react-bootstrap';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
        };
    }

    componentDidMount(){
    }


    render(){
          const paddingStyle = {
            padding: 10
          };

        return(
            <div>
                 
          
            <Container className="d-flex">
                <Row className="m-auto align-self-center">
                    <Col  style={{padding:'3rem'}}>
                        <Card style={{width:'40rem'}}>
                            <Card.Header>Login as {this.props.type}</Card.Header>
                            <Card.Body>
                                <Form>
                                <Form.Group className="mb-3" style={paddingStyle} controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" style={paddingStyle} controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button onClick={() => {this.props.goToAppointments("Appointments")}} variant="primary" type="submit">
                                    Submit
                                </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
            <Button variant="outline-info" onClick={() => {this.props.goToAppointments("HomePage")}}>Back</Button>
            </div>              
        )
    }
}
export default Login;