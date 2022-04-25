import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import React from "react";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            href="#"
            onClick={() => {
              this.props.setActiveCallback("HomePage");
            }}
          >
            SearchMD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#"
                onClick={() => {
                  this.props.setActiveCallback("Login");
                }}
              >
                Appointment
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  this.props.setActiveCallback("Login");
                }}
              >
                Doctors
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              onClick={() => {
                this.props.setActiveCallback("SearchmdComponent");
              }}
              variant="outline-primary"
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}
export default NavbarComponent;
