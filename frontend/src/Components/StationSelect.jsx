import React from 'react';

function StationSelect({ stations, handleStationSelect }) {
  return (
    <select onChange={handleStationSelect}>
      <option value="">Select a station</option>
      {stations.map((station) => (
        <option key={station.stationId} value={station.stationId}>
          Station id: {station.stationId} Station Name: {station.stationName}
        </option>
      ))}
    </select>
  );
}

export default StationSelect;
