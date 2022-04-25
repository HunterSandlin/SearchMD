import React from "react";
import AppointmentsCard from "./AppointmentsCard";
import AppointmentService from "../services/AppointmentService";
import { Card, Row, Col, Container } from "react-bootstrap";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    AppointmentService.getAppointments().then((Response) => {
      this.setState({ appointments: Response.data });
      console.log(this.state);
    });
  }

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

    return (
      <div>
        <Container>
          <Row className="d-flex py-5 align-items-center align-middle align-items-center">
            <Col className="col col-lg-12 col-md-12 text-center fixed align-middle align-items-center">
              <h3 className="mb-3">Your appointments</h3>
            </Col>
          </Row>
          <Row className="d-flex py-2 align-items-center align-middle align-items-center">
            <Col className="col col-lg-12 col-md-12 text-center fixed align-middle align-items-center">
              <div style={divStyle} className=" justify-content-center">
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Appointments;
