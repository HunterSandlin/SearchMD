
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Appointments from './components/Appointments';

import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState("HomePage");


  return (
    <div className="App">
      <NavbarComponent setActiveCallback={value => setActive(value)} />
      {active === "HomePage" && 
      <HomePage patientLogin={value => setActive(value)} />
      }
      {active === "Login" && 
      <Login goToAppointments={value => setActive(value)}/>
      }
      {active === "Appointments" && 
      <Appointments />
      }
    </div>
  );
}

export default App;
