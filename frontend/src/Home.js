import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StationSelect from './components/StationSelect';
import { getAllStations } from './api/apiCalls';

function Home() {
    const [stations, setStations] = useState([]);
    const [stationId, setStationId] = useState(17);

    useEffect(() => {
        const loadStations = async () => {
            try {
                const response = await getAllStations();
                setStations(response);
            } catch (error) {
                console.log(error);
            }
        };
        loadStations();
    }, []);

    const handleStationSelect = (event) => {
        const stationId = event.target.value;
        setStationId(stationId)
    };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Bike Rentals
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/create-reservation">
                Create Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit-reservation">
                Edit Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-reservation">
                View Reservation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="jumbotron mt-3">
        <h1 className="display-4">Rent a Bike Today!</h1>
        <p className="lead">
          Choose from our wide selection of bikes and explore the city on two wheels.
        </p>
        <hr className="my-4" />
        <p>
          Our bike rental service is fast, easy, and affordable. Book your bike now and get ready to ride!
        </p>
              <StationSelect stations={stations} handleStationSelect={handleStationSelect} />
              <Link className="btn btn-secondary btn-lg" to={`/create-reservation?stationId=${stationId}`} role="button">
                  Book Now!
              </Link>
        <hr className="my-4" />
        <p>Already have a reservation?</p>
        <Link className="btn btn-secondary btn-lg" to="/edit-reservation" role="button">
          Check In
        </Link>
      </div>
    </div>
  );
}

export default Home;
