import React from 'react';
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card";
//import {Button, Row, Col, Container} from 'react-bootstrap';

class AppointmentsCard extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
        };
    }

    componentDidMount(){
    }


    render(){
        return(


        <Card >

                <Card.Body>
                  <Card.Title style={{ color: "green" }}>{this.props.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Specialty
                  </Card.Subtitle>
                  <Card.Text>
                    Address
                  </Card.Text>
                  <Card.Link href="#"> For Students</Card.Link>
                </Card.Body>
              </Card>



        )
    }
}
export default AppointmentsCard;