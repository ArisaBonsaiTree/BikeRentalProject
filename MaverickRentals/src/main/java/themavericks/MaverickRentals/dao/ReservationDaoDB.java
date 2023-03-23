package themavericks.MaverickRentals.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import themavericks.MaverickRentals.entity.Reservation;
import themavericks.MaverickRentals.exception.CustomException;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Repository
public class ReservationDaoDB implements ReservationDao{

    @Autowired
    JdbcTemplate jdbcTemplate;


    @Override
    public void updateReservation(int reservationId, LocalDateTime endTime, int endStationId, BigDecimal price) throws CustomException {
        String sql = "UPDATE Reservation SET endTime = ?, endStationId = ?, price = ? WHERE reservationId = ?";
        int updatedRows = jdbcTemplate.update(sql, Timestamp.valueOf(endTime), endStationId, price, reservationId);
        if(updatedRows == 0) throw new CustomException("Error updating reservation");
    }

    @Override
    public Reservation getReservation(int reservationId) {
        String sql = "SELECT * FROM Reservation WHERE reservationId = ?";
        return jdbcTemplate.queryForObject(sql, new ReservationRowMapper(), reservationId);
    }

    private static class ReservationRowMapper implements RowMapper<Reservation> {
        @Override
        public Reservation mapRow(ResultSet rs, int rowNum) throws SQLException {
            Reservation reservation = new Reservation();
            reservation.setReservationId(rs.getInt("reservationId"));
            reservation.setStartTime(rs.getTimestamp("startTime").toLocalDateTime());
            reservation.setEndTime(rs.getTimestamp("endTime") != null ? rs.getTimestamp("endTime").toLocalDateTime() : null);
            reservation.setStartStationId(rs.getInt("startStationId"));
            reservation.setEndStationId(rs.getInt("endStationId"));
            reservation.setPrice(rs.getBigDecimal("price"));
            reservation.setCustomerName(rs.getString("customerName"));
            reservation.setBikeId(rs.getInt("bikeId"));
            return reservation;
        }
    }
}
