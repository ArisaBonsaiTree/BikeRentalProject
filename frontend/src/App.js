// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Home';
import CreateReservation from './components/CreateReservation'
import EditReservation from './EditReservation';
import Navbar from './Navbar';
import ReservationDetails from './ReservationDetails';
import CheckIn from './components/CheckIn';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-reservation" element={<CreateReservation />} />
        <Route path="/edit-reservation" element={<EditReservation/>} />
        <Route path="/view-reservation" element={<ReservationDetails/>} />
        <Route path="/checkin" element={<CheckIn/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
    </Router>
  );
}

export default App;
