import React from 'react';
import Carousel from 'react-material-ui-carousel';



function CarouselComponent(props) {


    const handleSelectBike = (bike) => {
        const { image, price } = props.bikeMapping[bike.type];
        props.onSelectBike(bike.bikeId, price);
    };

    return (
        <Carousel>
            {
                props.bikes.map((bike, index) => (
                    <BikeSlide key={bike.id} bike={bike} bikeMapping={props.bikeMapping} onClick={() => handleSelectBike(bike)} />
                ))
            }
        </Carousel>
    )
};

function BikeSlide(props) {
   
    const { image, price } = props.bikeMapping[props.bike.type];

    return (
        <div onClick={props.onClick}>
            <img src={image} alt={props.bike.type} />
            <h2>{props.bike.type}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default CarouselComponent;