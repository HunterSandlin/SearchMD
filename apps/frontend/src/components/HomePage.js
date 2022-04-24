import React from 'react';
import {Button, Row, Col, Container} from 'react-bootstrap';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
        };
    }
    componentDidMount(){
    }

    toggleModal = () => {
        console.log("Toggled");
        console.log(this.state.isOpen);
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){

        const divStyle = {
            marginLeft: '100px',
            maginTop: '500px',
            marginRight: '100px',
            marginBotton: 'auto',
            borderRadius: '1rem',
            magin: '100px',
            width: '180px',
            height: '70px'
          };


        return(
            
            <div>
                        <Container>
                        <Row className="d-flex py-5 align-items-center align-middle align-items-center">
                            <Col className="col col-lg-12 col-md-12 text-center fixed align-middle align-items-center">
                                <h1 className='mb-3'>Welcome to SearchMD</h1>
                            </Col>
                        </Row>
                        <Row className="d-flex py-5 align-items-center align-middle align-items-center">
                            <Col className="col col-lg-12 col-md-12 text-center fixed align-middle align-items-center">
                            <div className=' justify-content-center'>
                                    <Row style={{marginBottom:"50px"}}>
                                        <h4 className='mb-3 text-secondary'>Continue As</h4>
                                    </Row>
                                    <Row>
                                        <div>
                                            <Button onClick={() => {this.props.patientLogin("Login")}} style={divStyle} className="center-btn">
                                                Patient
                                            </Button>
                                            <Button onClick={() => {this.props.patientLogin("Login")}} style={divStyle} className="center-btn">
                                                Doctor
                                            </Button>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        </Container>
            


            </div>
        )
    }
}
export default HomePage;