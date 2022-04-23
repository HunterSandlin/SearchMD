import React from 'react';
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
            <div>
                name is {this.props.name}
            </div>
        )
    }
}
export default AppointmentsCard;