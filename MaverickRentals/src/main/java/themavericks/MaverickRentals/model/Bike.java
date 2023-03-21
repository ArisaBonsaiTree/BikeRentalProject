package themavericks.MaverickRentals.model;

import java.math.BigDecimal;
import java.util.Objects;

public class Bike {
    private int bikeId;
    private String bikeType;
    private BigDecimal bikePrice;
    private boolean available;

    public String getBikeType() {
        return bikeType;
    }

    public void setBikeType(String bikeType) {
        this.bikeType = bikeType;
    }

    public int getBikeId() {
        return bikeId;
    }

    public void setBikeId(int bikeId) {
        this.bikeId = bikeId;
    }

    public void setBikePrice(BigDecimal bikePrice) {
        this.bikePrice = bikePrice;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bike bike = (Bike) o;
        return bikeId == bike.bikeId && available == bike.available && Objects.equals(bikeType, bike.bikeType) && Objects.equals(bikePrice, bike.bikePrice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bikeId, bikeType, bikePrice, available);
    }
}
