package themavericks.MaverickRentals.model;

import java.util.Objects;

public class Bike {
    private int bikeId;

    public String getBikeType() {
        return bikeType;
    }

    public void setBikeType(String bikeType) {
        this.bikeType = bikeType;
    }

    private String bikeType;

    public int getBikeId() {
        return bikeId;
    }

    public void setBikeId(int bikeId) {
        this.bikeId = bikeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bike bike = (Bike) o;
        return bikeId == bike.bikeId && Objects.equals(bikeType, bike.bikeType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bikeId, bikeType);
    }
}
