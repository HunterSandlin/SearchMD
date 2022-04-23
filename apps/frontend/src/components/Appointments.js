import React from 'react';
import AppointmentsCard from './AppointmentsCard';
//import {Button, Row, Col, Container} from 'react-bootstrap';

class Appointments extends React.Component{
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
                <AppointmentsCard name="Dr. Phil" />
                <AppointmentsCard name="Dr. Myers"/>
                <AppointmentsCard name="Dr. Oz" />
                <AppointmentsCard name="Josh" />
            </div>
        )
    }
}
export default Appointments;