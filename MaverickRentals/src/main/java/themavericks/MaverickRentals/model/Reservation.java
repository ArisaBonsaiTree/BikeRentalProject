package themavericks.MaverickRentals.model;

import java.math.BigDecimal;
import java.time.LocalTime;
import java.util.Objects;

public class Reservation {
    private int reservationId;
    private int bikeId;
    private LocalTime startTime;
    private LocalTime endTime;
    private int startStationId;
    private int endStationId;
    private BigDecimal price;
    private String customerName;

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public int getStartStationId() {
        return startStationId;
    }

    public void setStartStationId(int startStationId) {
        this.startStationId = startStationId;
    }

    public int getEndStationId() {
        return endStationId;
    }

    public void setEndStationId(int endStationId) {
        this.endStationId = endStationId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }


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
        Reservation that = (Reservation) o;
        return reservationId == that.reservationId && bikeId == that.bikeId && startStationId == that.startStationId && endStationId == that.endStationId && Objects.equals(startTime, that.startTime) && Objects.equals(endTime, that.endTime) && Objects.equals(price, that.price) && Objects.equals(customerName, that.customerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reservationId, bikeId, startTime, endTime, startStationId, endStationId, price, customerName);
    }
}
