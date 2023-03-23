/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import React, { useState } from 'react';
import { Carousel, Button } from '@material-ui/core';

const bikeImages = {
  'Mountain bike': {
    image: 'https://picsum.photos/600/400?random=1',
    price: 599,
  },
  'Road bike': {
    image: 'https://picsum.photos/600/400?random=2',
    price: 799,
  },
  'City bike': {
    image: 'https://picsum.photos/600/400?random=3',
    price: 399,
  },
};

// should eventually be added as props into Carousel based on the station id
const bikes = [
  {
    id: 1,
    type: 'Mountain bike',
  },
  {
    id: 2,
    type: 'Road bike',
  },
  {
    id: 3,
    type: 'City bike',
  },
];

const BikeSlide = ({ bike, onClick }) => {
  const { image, price } = bikeImages[bike.type];
  
  return (
    <div onClick={onClick}>
      <img src={image} alt={bike.type} />
      <h2>{bike.type}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

const CarouselComponent = () => {
  // does this state apply to the general state of the application vs just the Carousel
  const [selectedBikeId, setSelectedBikeId] = useState(null);
  
  const handleSelectBike = (bikeId) => {
    setSelectedBikeId(bikeId);
  };
  
  return (
    <div>
      <Carousel>
        {bikes.map((bike, index) => (
          <BikeSlide key={bike.id} bike={bike} onClick={() => handleSelectBike(bike.id)} />
        ))}
      </Carousel>
      {selectedBikeId && (
        <p>You selected bike ID {selectedBikeId}</p>
      )}
    </div>
  );
};

export default CarouselComponent;