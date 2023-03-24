// EditReservation.jsx
import React, {useState, useEffect} from 'react';
import { getStations } from './api/stationService';

function EditReservation() {

  const [stations, setStations] = useState([])

  useEffect(() => {
    async function fetchData(){
      const data = await getStations();
      setStations(data);
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>Edit Reservation</h1>
      <p>This is the edit reservation page.</p>

      <h1>Stations</h1>
      <ul>
        {stations.map(station => (
          <li key={station.stationId}>
            {station.stationName} - {station.stationAvailableBikes} / {station.stationCapacity}
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default EditReservation;
