import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


const ReservationListItem = styled(ListItem)(({ theme }) => ({
        padding: theme.spacing(2),
    }));

export function CheckIn( { reservation, selectedBikePrice }) {
    return (
            <React.Fragment>
                <ReservationListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Reservation ID</Typography>
                            <Typography variant="body1">{reservation.reservationId}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Name</Typography>
                            <Typography variant="body1">{reservation.fullName}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Start Time</Typography>
                            <Typography variant="body1">{reservation.startTime}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Start Station</Typography>
                            <Typography variant="body1">{reservation.startStation}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Price Per Hour</Typography>
                            <Typography variant="body1">{`$${selectedBikePrice}`}</Typography>
                        </Grid>
                    </Grid>
                </ReservationListItem>
            </React.Fragment>
            );
}


export function CheckOut( { reservation }) {
    return (
            <React.Fragment>
                <ReservationListItem>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Reservation ID</Typography>
                            <Typography variant="body1">{reservation.reservationId}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Name</Typography>
                            <Typography variant="body1">{reservation.fullName}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Start Time</Typography>
                            <Typography variant="body1">{reservation.startTime}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">Start Station</Typography>
                            <Typography variant="body1">{reservation.startStation}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">End Time</Typography>
                            <Typography variant="body1">{reservation.endTime}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1">End Station</Typography>
                            <Typography variant="body1">{reservation.endStation}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Price</Typography>
                            <Typography variant="body1">{`$${reservation.price}`}</Typography>
                        </Grid>
                    </Grid>
                </ReservationListItem>
            </React.Fragment>
            );
}