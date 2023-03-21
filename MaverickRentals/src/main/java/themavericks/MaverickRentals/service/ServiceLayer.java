package themavericks.MaverickRentals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import themavericks.MaverickRentals.dao.BikeDao;
import themavericks.MaverickRentals.dao.BikeTypeDao;
import themavericks.MaverickRentals.dao.ReservationDao;
import themavericks.MaverickRentals.dao.StationDao;
import themavericks.MaverickRentals.entity.Bike;

import java.util.List;

@Service
public class ServiceLayer {

    @Autowired
    BikeDao bikeDao;

//    @Autowired
//    BikeTypeDao bikeTypeDao;
//
//    @Autowired
//    ReservationDao reservationDao;
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
}
