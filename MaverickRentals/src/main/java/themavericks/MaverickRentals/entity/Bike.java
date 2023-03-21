package themavericks.MaverickRentals.entity;

public class Bike {
    private int bikeId;
    private int bikeTypeId;
    private boolean available;
    private Integer stationId;

    private BikeType bikeType;

    public BikeType getBikeType() {
        return bikeType;
    }

    public void setBikeType(BikeType bikeType) {
        this.bikeType = bikeType;
    }

    public Bike() {
    }

    public int getBikeId() {
        return bikeId;
    }

    public void setBikeId(int bikeId) {
        this.bikeId = bikeId;
    }

    public int getBikeTypeId() {
        return bikeTypeId;
    }

    public void setBikeTypeId(int bikeTypeId) {
        this.bikeTypeId = bikeTypeId;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public Integer getStationId() {
        return stationId;
    }

    public void setStationId(Integer stationId) {
        this.stationId = stationId;
    }
}
