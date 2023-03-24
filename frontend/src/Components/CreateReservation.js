import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselComponent from './CarouselComponent';
import { CheckIn, CheckOut } from './Review';
import Reservation from './Reservation';

function CreateReservation(props) {

    const [selectedBikeId, setSelectedBikeId] = useState(null);
    const [selectedBikePrice, setSelectedBikePrice] = useState(null);

    // change back to handleSelectBike
    const onSelectBike = (bikeId, bikePrice) => {
        setSelectedBikeId(bikeId);
        setSelectedBikePrice(bikePrice);
    };

    // should eventually be added as props into Carousel based on the station id
    var bikes = [
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
    ]


    var bikeMapping = {
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
    }

    const reservation = {
        reservationId: "1234",
        fullName: "John Doe",
        startTime: "2023-04-01T10:00:00",
        startStation: "Station A",
        endTime: "2023-04-01T12:00:00",
        endStation: "Station B",
        price: 50.00,
    };

    const checkoutSteps = ['Details', 'Review'];
    const checkinSteps = ['Check In', 'Review'];

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <CheckOut reservation={reservation} selectedBikePrice={50.00} />;
            case 1:
                return <CheckOut reservation={reservation} selectedBikePrice={50.00} />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <><CarouselComponent bikes={bikes} bikeMapping={bikeMapping} onSelectBike={onSelectBike} /><Reservation steps={checkoutSteps} getStepContent={getStepContent} /></>
            
    )
}


export default CreateReservation;
