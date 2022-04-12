
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchmdComponent from './components/SearchmdComponent';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomePage />
    </div>
  );
}

export default App;
