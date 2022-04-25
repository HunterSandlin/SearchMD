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
            width: '20rem',
            height: 'auto'
        };

        const buttonConfirmStyle = {
            marginLeft: '25px',
            maginTop: '250px',
            marginRight: '25px',
            marginBotton: 'auto',
            borderRadius: '1rem',
            magin: '50px',
            width: 'auto',
            height: 'auto',
            backgroundColor: 'rgb(40, 150, 20)'
        };

        const buttonCancelStyle = {
            marginLeft: '25px',
            maginTop: '250px',
            marginRight: '25px',
            marginBotton: 'auto',
            borderRadius: '1rem',
            magin: '50px',
            width: 'auto',
            height: 'auto',
            backgroundColor: 'rgb(170, 10, 10)'
        };


        // `onClick` should be updated
        return(
            <div>
                <Row className="d-flex py-5 align-items-center align-middle align-items-center">
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Upcoming Appointment</Card.Title>
                            <Card.Text>
                                You have an appointment at the Health Center with {this.props.doctorName}
                                , on {this.props.aptDate}.
                                Please complete any necessary pre-visit forms by logging in to your patient <Card.Link href="#">health portal</Card.Link>.
                            </Card.Text>
                                <Row>
                                    <div>
                                        <Button onClick={this.toggleModal} style={buttonConfirmStyle}  className="center-btn">
                                        Confirm
                                        </Button>
                                        <Button onClick={this.toggleModal} style={buttonCancelStyle} className="center-btn">
                                        Cancel
                                        </Button>
                                    </div>
                                </Row>
                        </Card.Body>
                    </Card>
                </Row>





            </div>
        )
    }
}
export default AppointmentsCard;