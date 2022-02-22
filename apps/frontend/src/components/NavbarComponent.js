import {Navbar,Container, Nav} from 'react-bootstrap'
import React from 'react'

class NavbarComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    componentDidMount(){
    }
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#">SearchMD</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}
export default NavbarComponent