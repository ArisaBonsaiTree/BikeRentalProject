import React from 'react';
import { useLocation } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();
  const reservation = location.state.reservation;

  return (
    <div>
      <h1>Reservation Updated</h1>
      <p>Reservation Id: {reservation.reservationId}</p>
      <p>Start Time: {reservation.startTime}</p>
      <p>End Time: {reservation.endTime}</p>
      <p>Start Station ID: {reservation.startStationId}</p>
      <p>End Station ID: {reservation.endStationId}</p>
      <p>Price: ${reservation.price.toFixed(2)}</p>
      <p>Customer Name: {reservation.customerName}</p>
      <p>Bike ID: {reservation.bikeId}</p>
    </div>
  );
}

export default Confirmation;
