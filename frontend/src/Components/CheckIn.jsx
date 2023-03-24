// CheckIn.jsx
import React, { useState, useEffect1} from 'react';
import { useLocation } from 'react-router-dom';
import { updateReservation } from '../api/apiCalls';
import { useNavigate } from 'react-router-dom';

function CheckIn() {
  const location = useLocation();
  const reservation = location.state.reservation;
  const navigate = useNavigate();

  
  const [endStationId, setEndStationId] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateReservation(
        reservation.reservationId,
        endTime,
        endStationId,
        reservation.bikeId
      );
      setMessage(response);  
      console.log(response)

      // Redirect to a new page if the reservation was successfully updated
      if (response === 'Reservation updated') {
        navigate('/confirmation', { state: { reservation } });
      }
    
    } catch (error) {
      setMessage(error.message);
    }
  };


  return (
    <div>
      <h1>Check In</h1>
      <p>Reservation Id: {reservation.reservationId}</p>
      <p>Start Time: {reservation.startTime}</p>
      <p>End Time: {reservation.endTime}</p>
      <p>Start Station ID: {reservation.startStationId}</p>
      <p>End Station ID: {reservation.endStationId}</p>
      <p>Price: ${reservation.price.toFixed(2)}</p>
      <p>Customer Name: {reservation.customerName}</p>
      <p>Bike ID: {reservation.bikeId}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="endStationId">End Station ID:</label>
          <input
            type="number"
            id="endStationId"
            value={endStationId}
            onChange={(e) => setEndStationId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Reservation</button>
      </form>
      {message && <p>{message}</p>}


    </div>
  );
}

export default CheckIn;