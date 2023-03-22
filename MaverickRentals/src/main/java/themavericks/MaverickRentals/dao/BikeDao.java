package themavericks.MaverickRentals.dao;

import themavericks.MaverickRentals.entity.Bike;

import java.util.List;

public interface BikeDao {
    public List<Bike> findAvailableBikesByStationId(int stationId);

    public List<Bike> findAllAvailableBikes();

    public List<Bike> findAllBikes();
}
