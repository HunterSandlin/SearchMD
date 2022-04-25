import axios from "axios";

const API_URL = "http://localhost:8080/appointment/all";
class AppointmentService {
  getAppointments() {
    return axios.get(API_URL);
  }
}
export default new AppointmentService();
