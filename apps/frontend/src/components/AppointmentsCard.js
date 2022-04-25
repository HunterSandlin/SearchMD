import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';

class AppointmentsCard extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
        };
    }

    componentDidMount(){
    }


    render(){

        const cardStyle = {
            marginLeft: '50px',
            maginTop: '100px',
            marginRight: '50px',
            marginBotton: 'auto',
            borderRadius: '1rem',
            width: '30rem',
            height: 'auto'
        };

        const divPadding = {
            padding: '10px'
        };

        return(
            <div style={divPadding}>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>Upcoming Appointment</Card.Title>
                        <Card.Text>
                            You have an appointment at the Health Center with {this.props.doctorName} 
                            , on {this.props.aptDate}. 
                            Please complete any necessary pre-visit forms by logging in to your patient <Card.Link href="#">health portal</Card.Link>. 
                        </Card.Text>
                            <Row>
                                <Col> 
                                    <Button>
                                        Confirm
                                    </Button>
                                </Col>
                                <Col> 
                                    <Button className="btn-danger">
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}
export default AppointmentsCard;