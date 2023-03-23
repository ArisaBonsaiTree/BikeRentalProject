package themavericks.MaverickRentals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import themavericks.MaverickRentals.dao.BikeDao;
import themavericks.MaverickRentals.dao.BikeTypeDao;
import themavericks.MaverickRentals.dao.ReservationDao;
import themavericks.MaverickRentals.dao.StationDao;
import themavericks.MaverickRentals.entity.Bike;
import themavericks.MaverickRentals.entity.BikeType;
import themavericks.MaverickRentals.entity.Reservation;
import themavericks.MaverickRentals.exception.CustomException;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ServiceLayer {

    public Object updateReservation;
    @Autowired
    BikeDao bikeDao;

    @Autowired
    BikeTypeDao bikeTypeDao;

    @Autowired
    ReservationDao reservationDao;
//
//    @Autowired
//    StationDao stationDao;


    public List<Bike> getAllBikesAtStation(int stationId){
        return bikeDao.findAvailableBikesByStationId(stationId);
    }

    public List<Bike> getAllBikes() {
        List<Bike> bikes = bikeDao.findAllBikes();

        return bikes;
    }

    public void updateReservationAndBike(int reservationId, LocalDateTime endTime, int endStationId, int bikeId) throws CustomException {
        Reservation reservation = reservationDao.getReservation(reservationId);
        BigDecimal pricePerHour = bikeDao.getPricePerHour(bikeId);
        BigDecimal durationHours = BigDecimal.valueOf(Duration.between(reservation.getStartTime(), endTime).toHours());
        BigDecimal totalPrice = durationHours.multiply(pricePerHour);

        reservationDao.updateReservation(reservationId, endTime, endStationId, totalPrice);
        bikeDao.updateBikeStatus(bikeId, true, endStationId);
    }

    public List<BikeType> getAllBikeTypes() {
        return bikeTypeDao.getAllBikeTypes();
    }

    public BikeType getBikeTypeById(int bikeTypeId) {
        return bikeTypeDao.getBikeTypeById(bikeTypeId);
    }


}
