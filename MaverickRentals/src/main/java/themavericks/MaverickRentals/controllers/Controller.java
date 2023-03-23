package themavericks.MaverickRentals.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import themavericks.MaverickRentals.entity.Bike;
import themavericks.MaverickRentals.entity.BikeType;
import themavericks.MaverickRentals.entity.Reservation;
import themavericks.MaverickRentals.entity.Station;
import themavericks.MaverickRentals.exception.CustomException;
import themavericks.MaverickRentals.service.ServiceLayer;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class Controller {
    @Autowired
    ServiceLayer serviceLayer;

    @GetMapping("bikes")
    public ResponseEntity<List<Bike>> getAllBikes(){
        List<Bike> bikes = serviceLayer.getAllBikes();
        if(bikes.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        else{
            return ResponseEntity.ok(bikes);
        }
    }

    @GetMapping("bikes/{stationId}")
    public ResponseEntity<List<Bike>> bikesByStationId(@PathVariable("stationId") int stationId){
        List<Bike> bikes = serviceLayer.getAllBikesAtStation(stationId);

        if(bikes.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        else{
            return ResponseEntity.ok(bikes);
        }
    }

    @GetMapping("station/{stationId}")
    public ResponseEntity<List<Station>> findByStationId(@PathVariable int stationId) {
        List<Station> stations = serviceLayer.getStationById(stationId);
        if(stations.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        else{
            return ResponseEntity.ok(stations);
        }
    }
    @GetMapping("/getReservation")
    public ResponseEntity<List<Reservation>> getAllReservations(){
        List<Reservation> reservations = serviceLayer.getAllReservations();

        if(reservations.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        else{
            return ResponseEntity.ok(reservations);
        }
    }

    @PostMapping("/createReservation")
    public ResponseEntity<Reservation> createReservation(@RequestParam long numOfHours, int startStationId, String customerName, int bikeId) throws CustomException{
        Reservation reservation = serviceLayer.addReservation(numOfHours, startStationId, customerName, bikeId);
        return new ResponseEntity(reservation, HttpStatus.CREATED);
    }

    // PUT http://localhost:8080/reservation/{reservationId}?endTime={endTime}&endStationId={endStationId}&bikeId={bikeId}
    // localhost:8080/reservation/1?endTime=2023-04-23T14:00:00&endStationId=2&bikeId=1
    @PutMapping("/reservation/{reservationId}")
    public ResponseEntity updateReservation(@PathVariable int reservationId, @RequestParam LocalDateTime endTime, @RequestParam int endStationId, @RequestParam int bikeId) {
        try {
            serviceLayer.updateReservationAndBike(reservationId, endTime, endStationId, bikeId);
            return ResponseEntity.ok("Reservation updated");
        } catch (CustomException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/biketypes")
    public List<BikeType> getAllBikeTypes() {
        return serviceLayer.getAllBikeTypes();
    }

    @GetMapping("/biketype/{id}")
    public BikeType getBikeTypeById(@PathVariable int id) {
        return serviceLayer.getBikeTypeById(id);
    }

}
