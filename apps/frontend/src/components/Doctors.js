import React from 'react';
import DoctorsCard from './DoctorsCard';
//import {Button, Row, Col, Container} from 'react-bootstrap';

class Doctors extends React.Component{
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
                <DoctorsCard name="Dr. Phil" drSpecialty='Generalist' address='CLT' />
                <DoctorsCard name="Dr. Myers" drSpecialty='Cardiologists' address='CLT'/>
                <DoctorsCard name="Dr. Oz" drSpecialty='Dermatologists' address='CLT'/>
                <DoctorsCard name="Josh" drSpecialty='Family Physicians' address='CLT'/>
            </div>
        )
    }
}
export default Doctors;