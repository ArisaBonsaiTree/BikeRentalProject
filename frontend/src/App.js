// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Home';
import CreateReservation from './CreateReservation';
import EditReservation from './EditReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-reservation" element={<CreateReservation/>} />
        <Route path="/edit-reservation" element={<EditReservation/>} />
      </Routes>
    </Router>
  );
}

export default App;
