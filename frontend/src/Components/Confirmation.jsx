import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Confirmation() {
  const location = useLocation();
  const reservation = location.state.reservation;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Reservation Updated</h1>
          <p>Reservation Id: {reservation.reservationId}</p>
          <p>Start Time: {reservation.startTime}</p>
          <p>End Time: {reservation.endTime}</p>
          <p>Start Station ID: {reservation.startStationId}</p>
          <p>End Station ID: {reservation.endStationId}</p>
          <p>Price: ${reservation.price.toFixed(2)}</p>
          <p>Customer Name: {reservation.customerName}</p>
          <p>Bike ID: {reservation.bikeId}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Confirmation;
