import React, { useState, useEffect } from 'react';
import { CarouselComponent, BikeSlide } from './CarouselComponent';
import { CheckIn, CheckOut } from './Review';
import Reservation from './Reservation';
import { ReservationForm } from './Input';
import Typography from '@mui/material/Typography';

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

function getBikesByStationId(stationId) {
    return axios.get(`${API_BASE_URL}/bikes/${stationId}`);
}

function createReservation(numOfHours, startStationId, customerName, bikeId) {
    const url = `${API_BASE_URL}/createReservation`;

    const payload = {
        numOfHours: numOfHours,
        startStationId: startStationId,
        customerName: customerName,
        bikeId: bikeId
    };

    return axios.post(url, payload);
}


// stationId will be passed in as a props
function CreateReservation(props) {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedBikeId, setSelectedBikeId] = useState(null);
    const [selectedBikePrice, setSelectedBikePrice] = useState(0);
    const [customerName, setCustomerName] = useState('');
    const [numOfHours, setNumOfHours] = useState('');
    const [startTime, setStartTime] = useState(new Date());
    const stationId = 11;

    const handleCustomerNameChange = (newCustomerName) => {
        console.log(newCustomerName);
        setCustomerName(newCustomerName);
    };

    const handleNumOfHoursChange = (newNumofHours) => {
        console.log(newNumofHours);
        setNumOfHours(newNumofHours);
    };

    const handleStartTime = (startTime) => {
        console.log(startTime);
        setStartTime(startTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    };

    function handleSubmit() {
        createReservation(numOfHours, stationId, customerName, selectedBikeId)
            .then(response => {
                console.log(response.data);
                // Handle successful response
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
    }


    var bikeImages = {
        'Standard': {
            image: 'https://picsum.photos/600/400?random=1',
        },
        'Electric': {
            image: 'https://picsum.photos/600/400?random=2',
        },
        'Tandom': {
            image: 'https://picsum.photos/600/400?random=3',
        },
        'Mountain': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71oPYVZs4kL._AC_SX679_.jpg',
        },
        'City': {
            image: 'https://picsum.photos/600/400?random=3',
        },
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getBikesByStationId(stationId);
                setBikes(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [stationId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const onSelectBike = (bikeId, bikePrice) => {
        setSelectedBikeId(bikeId);
        setSelectedBikePrice(bikePrice);
    };

    const reservation = {
        reservationId: "1234",
        fullName: "John Doe",
        startTime: "2023-04-01T10:00:00",
        startStation: "Station A",
        numOfHours: 8,
        pricePerHour: 50.00,
    };

    const checkoutSteps = ['Check Out', 'Review'];

    function SendData(sendData) {
        return (
            <React.Fragment>
                <Typography variant="h5" gutterBottom>
                    Thank you for confirming!
                </Typography>
            </React.Fragment>
        )
    }


    function getStepContent(step) {
        switch (step) {
            case 0:
                return <ReservationForm
                    onCustomerNameChange={handleCustomerNameChange}
                    onNumOfHoursChange={handleNumOfHoursChange}
                    onStartTimeChange={handleStartTime}
                />;
            case 1:
                return <CheckOut customerName={customerName} startTime={startTime}
                    startStation={stationId} pricePerHour={selectedBikePrice}/>

            throw new Error('Unknown step');
        }
    }

    return (
        <>  
        <CarouselComponent bikes={bikes} bikeImages={bikeImages} onClick={onSelectBike} />
            <Reservation steps={checkoutSteps} getStepContent={getStepContent} onSubmit={handleSubmit} />
        </>

    )
}


export default CreateReservation;

