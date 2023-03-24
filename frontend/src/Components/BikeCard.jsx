import React from 'react';

function BikeCard({ bike, handleBikeSelection }) {
  return (
    <div>
      <p>Bike ID: {bike.bikeId}</p>
      <p>Bike Type: {bike.bikeType?.typeName}</p>
      <p>Bike Price: ${bike.bikeType?.bikePrice.toFixed(2)}</p>
      <button onClick={() => handleBikeSelection(bike.bikeId)}>Select</button>
    </div>
  );
}

export default BikeCard;
