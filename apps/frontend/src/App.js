
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchmdComponent from './components/SearchmdComponent';
import AppointmentsCard from './components/AppointmentsCard';
import Appointments from './components/Appointments';

import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Appointments />
    </div>
  );
}

export default App;
