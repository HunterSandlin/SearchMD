import React from "react";
import searchmdService from "../services/SearchmdService";
import DoctorCard from "./DoctorCard";
import { Card, Row, Col, Container } from "react-bootstrap";

class SearchmdComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
    };
  }
  componentDidMount() {
    searchmdService.getString().then((Response) => {
      this.setState({ doctors: Response.data });
      console.log(this.state.doctors);
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
              <h3 className="mb-3">Doctors near You</h3>
            </Col>
          </Row>
          <Row className="d-flex py-2 align-items-center align-middle align-items-center">
            <Col className="col col-lg-12 col-md-12 text-center fixed align-middle align-items-center">
              <div style={divStyle} className=" justify-content-center">
                {this.state.doctors.map((doctor) => (
                  <DoctorCard
                    doctorFirstName={doctor.doctorFirstName}
                    doctorLastName={doctor.doctorLastName}
                    speciality={doctor.speciality}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default SearchmdComponent;
