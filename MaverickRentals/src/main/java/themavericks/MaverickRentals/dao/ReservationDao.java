package themavericks.MaverickRentals.dao;

import themavericks.MaverickRentals.entity.Reservation;
import themavericks.MaverickRentals.exception.CustomException;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface ReservationDao {

    void updateReservation(int reservationId, LocalDateTime endTime, int endStationId, BigDecimal price) throws CustomException;

    Reservation getReservation(int reservationId);
}
