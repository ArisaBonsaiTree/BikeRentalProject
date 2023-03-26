import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';


export function CarouselComponent(props) {
    return (
        <Carousel>
            {
                props.bikes ? props.bikes.map((bike) => (
                    <BikeSlide key={bike.bikeId} bike={bike} bikeImages={props.bikeImages} onClick={props.onClick} />
                )) : null
            }
        </Carousel>
    )
};


export function BikeSlide(props) {
    return (
        <Card onClick={() => props.onClick(props.bike.bikeId, props.bike.bikeType.bikePrice)}>
            <CardMedia
                component="img"
                height="200"
                width="100"
                image={props.bikeImages[props.bike.bikeType.typeName].image}
                alt={props.bike.bikeType.typeName}
            />
            <CardContent>
                <Typography variant="h6">Bike ID: {props.bike.bikeId}</Typography>
                <Typography variant="h6">{props.bike.bikeType.typeName}</Typography>
                <Typography variant="body1">Price: ${props.bike.bikeType.bikePrice}</Typography>
            </CardContent>
        </Card>
    );
};