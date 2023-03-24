// ReservationDetails.jsx
import React, { useState, useEffect1} from 'react';
import { useNavigate } from 'react-router-dom';
import { getReservationById } from './api/apiCalls';

function ReservationDetails() {
  const [reservationId, setReservationId] = useState('');
  const [reservation, setReservation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setReservation(null);
    setErrorMessage('');

    if (reservationId) {
      const data = await getReservationById(reservationId);
      if (data) {
        setReservation(data);
      } else {
        setErrorMessage('No reservation exists with that ID');
      }
    }
  };

  
  const navigate = useNavigate();

  const handleCheckIn = () => {
    navigate('/checkin', { state: { reservation } });
  };

  return (
    <div>
      <h1>Reservation Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="reservationId">Reservation ID:</label>
        <input
          type="number"
          id="reservationId"
          value={reservationId}
          onChange={(e) => setReservationId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {reservation && (
        <div>
          <p>Start Time: {reservation.startTime}</p>
          <p>End Time: {reservation.endTime}</p>
          <p>Start Station ID: {reservation.startStationId}</p>
          <p>End Station ID: {reservation.endStationId}</p>
          <p>Price: ${reservation.price.toFixed(2)}</p>
          <p>Customer Name: {reservation.customerName}</p>
          <p>Bike ID: {reservation.bikeId}</p>
          <button onClick={handleCheckIn}>Check In</button>
        </div>
      )}
    </div>
  );
}

export default ReservationDetails;
