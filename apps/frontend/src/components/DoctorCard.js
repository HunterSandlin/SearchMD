import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

class DoctorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const cardStyle = {
      marginLeft: "50px",
      maginTop: "100px",
      marginRight: "50px",
      marginBotton: "auto",
      borderRadius: "1rem",
      width: "20rem",
      height: "auto",
    };

    const buttonConfirmStyle = {
      marginLeft: "25px",
      maginTop: "250px",
      marginRight: "25px",
      marginBotton: "auto",
      borderRadius: "1rem",
      magin: "50px",
      width: "auto",
      height: "auto",
      backgroundColor: "rgb(40, 150, 20)",
    };

    const buttonCancelStyle = {
      marginLeft: "25px",
      maginTop: "250px",
      marginRight: "25px",
      marginBotton: "auto",
      borderRadius: "1rem",
      magin: "50px",
      width: "auto",
      height: "auto",
      backgroundColor: "rgb(170, 10, 10)",
    };

    // `onClick` should be updated
    return (
      <div>
        <Row className="d-flex py-5 align-items-center align-middle align-items-center">
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>Dr</Card.Title>
              <Card.Text>First Name:{this.props.doctorFirstName}</Card.Text>
              <Card.Text>Last Name:{this.props.doctorLastName}</Card.Text>
              <Card.Text>Speciality:{this.props.speciality}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    );
  }
}
export default DoctorCard;
