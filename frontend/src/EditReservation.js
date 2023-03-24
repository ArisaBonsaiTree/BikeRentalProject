// EditReservation.jsx
import React, {useState, useEffect} from 'react';
import {getAllStations, getBikesByStation} from './api/apiCalls'


function EditReservation() {

  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[selectedStationId, setSelectedStationId] = useState("")
  const[selectedBikeId, setSelectedBikeId] = useState("")
  const[bikes, setBikes] = useState([])

  // Get all the stations when we load the page
  useEffect(() => {
    async function fetchData() {
      const data = await getAllStations();
      setStations(data);
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchBikes(){
      const data = await getBikesByStation(selectedStationId)
      setBikes(data)
    }
    if(selectedStationId !== ""){
      fetchBikes()
    }
  }, [selectedStationId])

  const filteredStations = stations.filter((station) =>
    station.stationName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStationSelect = (event) => {
    setSelectedStationId(event.target.value)
  }

  const handleBikeSelection = (bikeId) => {
    console.log(`Selected bike with ID ${bikeId}`);
    setSelectedBikeId(bikeId)
  };

  return (
    <div>
      <h1>Bike id: {selectedBikeId}</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select onChange={handleStationSelect}>
        <option value="">Select a station</option>
        {filteredStations.map((station) => (
          <option key={station.stationId} value={station.stationId}>
            Station id: {station.stationId} Station Name: {station.stationName}
          </option>
        ))}
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {bikes && bikes.length > 0 ? bikes.map((bike) => (
          <div key={bike.bikeId}>
            <p>Bike ID: {bike.bikeId}</p>
            <p>Bike Type: {bike.bikeType?.typeName}</p>
            <p>Bike Price: ${bike.bikeType?.bikePrice.toFixed(2)}</p>
            <button onClick={() => handleBikeSelection(bike.bikeId)}>Select</button>
          </div>
          )) : 
            <p>{bikes ? 'Loading...' : 'No bikes at this station'}</p>}
          </div>
    </div>
  );
}


export default EditReservation;
