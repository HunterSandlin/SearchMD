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
                <DoctorsCard name="Dr. p" />
                <DoctorsCard name="Dr. m"/>
                <DoctorsCard name="Dr. Oz" />
                <DoctorsCard name="Josh" />
            </div>
        )
    }
}
export default Doctors;