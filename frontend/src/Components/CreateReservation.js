import React, { useState, useEffect } from 'react';
import { CarouselComponent } from './CarouselComponent';
import { CheckOut } from './Review';
import Reservation from './Reservation';
import { ReservationForm } from './Input';
import Typography from '@mui/material/Typography';
import { createReservation, getBikesByStation } from '../api/apiCalls';


const API_BASE_URL = 'http://localhost:8080';


// stationId will be passed in as a props
function CreateReservation(props) {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedBikeId, setSelectedBikeId] = useState(null);
    const [selectedBikePrice, setSelectedBikePrice] = useState(0);
    const [customerName, setCustomerName] = useState('');
    const [numOfHours, setNumOfHours] = useState('');
    const [startTime, setStartTime] = useState(new Date());
    const [returnedResponse, setReturnedReponse] = useState(null);
    const stationId = 17;

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
        const reservation = createReservation(numOfHours, stationId, customerName, selectedBikeId);
        setReturnedReponse(reservation)
    }


    var bikeImages = {
        'Standard': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81ozH1S0-WL._AC_SL1500_.jpg',
        },
        'Electric': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613TloL9e3L._AC_SL1500_.jpg',
        },
        'Tandom': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Fi6V7wciL._AC_SL1500_.jpg',
        },
        'Mountain': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91gEELfSWkL._AC_SX679_.jpg',
        },
        'City': {
            image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71QTRS0M7BL._AC_SL1500_.jpg',
        },
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getBikesByStation(stationId);
                setBikes(response);
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
            {selectedBikeId ? (
                <Reservation
                    steps={checkoutSteps}
                    getStepContent={getStepContent}
                    onSubmit={handleSubmit}
                />
            ) : (
                <CarouselComponent
                    bikes={bikes}
                    bikeImages={bikeImages}
                    onClick={onSelectBike}
                />
            )}
        </>
    );
}


export default CreateReservation;

