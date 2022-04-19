import React from 'react';
import {Button, Row, Col, Container} from 'react-bootstrap';
import LoginModal from './LoginModal';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            isOpen: false 
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
           const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
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
                                    <Button onClick={this.toggleModal} style={divStyle} className="center-btn">
                                        Patient
                                    </Button>
                                    <Button onClick={this.toggleModal} style={divStyle} className="center-btn">
                                        Doctor
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </Container>

                <LoginModal onClose={this.toggleModal} show={true} />

                {
                this.state.isOpen &&
                <div>
                    Login Modal
                </div>
                }


            </div>
        )
    }
}
export default HomePage;