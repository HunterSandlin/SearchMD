import React from "react";
import AppointmentsCard from "./AppointmentsCard";
import { Button, Row, Col, Container } from "react-bootstrap";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {}

  render() {
    const divStyle = {
      marginLeft: "50px",
      maginTop: "250px",
      marginRight: "50px",
      marginBotton: "auto",
      borderRadius: "1rem",
      width: "20rem",
      height: "auto",
      align: "flex",
    };

    const divPadding = {
      padding: "20px",
    };
    return (
      <div style={divPadding}>
        <Container className="d-flex" style={divPadding}>
          <Row className="m-auto align-self-center">
            <Col>
              <AppointmentsCard
                doctorName="Dr. Phil"
                aptDate="4/20/2022 at 11:00 AM"
              />
              <AppointmentsCard
                doctorName="Dr. Myers"
                aptDate="4/15/2022 at 9:30 AM"
              />
              <AppointmentsCard
                doctorName="Dr. Oz"
                aptDate="4/11/2022 at 1:45 PM"
              />
              <AppointmentsCard
                doctorName="Josh"
                aptDate="4/5/2022 at 2:45 PM"
              />
            </Col>
            <Col>
              <AppointmentsCard
                doctorName="Dr. Jason"
                aptDate="5/10/2022 at 9:00 AM"
              />
              <AppointmentsCard
                doctorName="Dr. Myers"
                aptDate="6/25/2022 at 10:45 AM"
              />
              <AppointmentsCard
                doctorName="Dr. Azimov"
                aptDate="6/23/2022 at 8:00 PM"
              />
              <AppointmentsCard
                doctorName="Josh"
                aptDate="6/26/2022 at 5:00 PM"
              />
            </Col>
          </Row>
        </Container>
        <Button
          variant="outline-danger"
          onClick={() => {
            this.props.setActiveCallback("Login");
          }}
        >
          Logout
        </Button>
      </div>
    );
  }
}
export default Appointments;
