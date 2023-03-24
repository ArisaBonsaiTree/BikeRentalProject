import React from 'react';
import BikeCard from './BikeCard';

function BikeList({ bikes, handleBikeSelection }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {bikes && bikes.length > 0
        ? bikes.map((bike) => (
            <BikeCard key={bike.bikeId} bike={bike} handleBikeSelection={handleBikeSelection} />
          ))
        : <p>{bikes ? '' : 'No bikes at this station'}</p>}
    </div>
  );
}

export default BikeList;
