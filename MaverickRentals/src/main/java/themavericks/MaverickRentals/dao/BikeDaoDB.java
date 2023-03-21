package themavericks.MaverickRentals.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import themavericks.MaverickRentals.entity.Bike;
import themavericks.MaverickRentals.entity.BikeType;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class BikeDaoDB implements BikeDao{

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Bike> findAvailableBikesByStationId(int stationId) {
        String sql = "SELECT * FROM Bike " +
                "JOIN BikeType USING (bikeTypeId) " +
                "WHERE stationId = ? AND available = true;";
        return jdbcTemplate.query(sql, new Object[]{stationId}, new BikeMapperWithJoin());
    }


    public List<Bike> findAllAvailableBikes() {
        String sql = "SELECT * FROM Bike JOIN BikeType USING (bikeTypeId) WHERE available = true;";
        return jdbcTemplate.query(sql, new BikeRowMapper());
    }

    public List<Bike> findAllBikes() {
        String sql = "SELECT * FROM Bike JOIN BikeType USING (bikeTypeId);";
        return jdbcTemplate.query(sql, new BikeRowMapper());
    }


    public static final class BikeMapperWithJoin implements RowMapper<Bike>{
        @Override
        public Bike mapRow(ResultSet rs, int rowNum) throws SQLException {
            Bike bike = new Bike();
            bike.setBikeId(rs.getInt("bikeId"));
            bike.setBikeTypeId(rs.getInt("bikeTypeId"));
            bike.setAvailable(rs.getBoolean("available"));
            bike.setStationId(rs.getInt("stationId"));

            BikeType bikeType = new BikeType();
            bikeType.setBikeTypeId(rs.getInt("bikeTypeId"));
            bikeType.setTypeName(rs.getString("typeName"));
            bikeType.setBikePrice(rs.getBigDecimal("bikePrice"));

            bike.setBikeType(bikeType);

            return bike;
        }
    }

    public class BikeRowMapper implements RowMapper<Bike> {

        @Override
        public Bike mapRow(ResultSet rs, int rowNum) throws SQLException {
            Bike bike = new Bike();
            bike.setBikeId(rs.getInt("bikeId"));
            bike.setBikeTypeId(rs.getInt("bikeTypeId"));
            bike.setAvailable(rs.getBoolean("available"));
            bike.setStationId(rs.getInt("stationId"));

            BikeType bikeType = new BikeType();
            bikeType.setBikeTypeId(rs.getInt("bikeTypeId"));
            bikeType.setTypeName(rs.getString("typeName"));
            bikeType.setBikePrice(rs.getBigDecimal("bikePrice"));

            bike.setBikeType(bikeType);

            return bike;
        }
    }


}
