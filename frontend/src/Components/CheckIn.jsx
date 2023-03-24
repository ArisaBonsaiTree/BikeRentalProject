import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateReservation } from '../api/apiCalls';

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
      console.log(response);

      // Redirect to a new page if the reservation was successfully updated
      if (response === 'Reservation updated') {
        navigate('/confirmation', { state: { reservation } });
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Check In</h1>
      <div className="row">
        <div className="col-sm-6">
          <p>
            <strong>Reservation Id:</strong> {reservation.reservationId}
          </p>
          <p>
            <strong>Start Time:</strong> {reservation.startTime}
          </p>
          <p>
            <strong>End Time:</strong> {reservation.endTime}
          </p>
          <p>
            <strong>Start Station ID:</strong> {reservation.startStationId}
          </p>
          <p>
            <strong>End Station ID:</strong> {reservation.endStationId}
          </p>
          <p>
            <strong>Price:</strong> ${reservation.price.toFixed(2)}
          </p>
          <p>
            <strong>Customer Name:</strong> {reservation.customerName}
          </p>
          <p>
            <strong>Bike ID:</strong> {reservation.bikeId}
          </p>
        </div>
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="endStationId">End Station ID:</label>
              <input
                type="number"
                className="form-control"
                id="endStationId"
                value={endStationId}
                onChange={(e) => setEndStationId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time:</label>
              <input
                type="datetime-local"
                className="form-control"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Reservation
            </button>
          </form>
        </div>
      </div>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default CheckIn;
