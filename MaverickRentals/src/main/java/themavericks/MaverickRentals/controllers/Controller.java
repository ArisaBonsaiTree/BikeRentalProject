package themavericks.MaverickRentals.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import themavericks.MaverickRentals.entity.Bike;
import themavericks.MaverickRentals.service.ServiceLayer;

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



}
