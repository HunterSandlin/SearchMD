import React from 'react';
import Card from "react-bootstrap/Card";
import {Button, Row, Col, Container} from 'react-bootstrap';

class DoctorsCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        };
    }

    componentDidMount(){
    }


    render(){

    const buttonSelectStyle = {
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
        return(
           <Card >

                           <Card.Body>
                             <Card.Title style={{ color: "green" }}>{this.props.name}</Card.Title>
                             <Card.Subtitle className="mb-2 text-muted">
                               {this.props.drSpecialty}
                             </Card.Subtitle>
                             <Card.Text>
                               {this.props.address}
                             </Card.Text>
                             <Row>
                                 <div>
                                  <Button onClick={this.toggleModal} style={buttonSelectStyle}  className="center-btn">
                                 Select
                                 </Button>

                                    </div>
                                   </Row>
                           </Card.Body>
                         </Card>
        )
    }
}
export default DoctorsCard;