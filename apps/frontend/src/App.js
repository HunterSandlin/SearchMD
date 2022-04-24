
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Appointments from './components/Appointments';
import Doctors from './components/Doctors';

import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState("Doctors");


  return (
    <div className="App">
      <NavbarComponent />
      {active === "HomePage" && 
      <HomePage patientLogin={value => setActive(value)} />
      }
      {active === "Login" && 
      <Login goToAppointments={value => setActive(value)}/>
      }
      {active === "Appointments" && 
      <Appointments />
      }
      {active === "Doctors" &&
            <Doctors />
            }
    </div>
  );
}

export default App;
