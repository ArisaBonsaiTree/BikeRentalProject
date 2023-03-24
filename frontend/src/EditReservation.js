// EditReservation.jsx
import React, {useState, useEffect} from 'react';
import {getAllStations, getBikesByStation} from './api/apiCalls'

function EditReservation() {

  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const[selectedStationId, setSelectedStationId] = useState("")
  const[bikes, setBikes] = useState([
    {
      bikeId: 1,
      bikeTypeId: 2,
      available: true,
      stationId: 17,
      bikeType: {
        bikeTypeId: 2,
        typeName: "Electric",
        bikePrice: 7.00
      }
    }
  ])

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

  return (
    <div>
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

      <button
        onClick={() => {
          console.log("HELLO WORLD")
          console.log(bikes);
        }}
        disabled={selectedStationId === ''}
      >
        Search Bikes
      </button>
    
    </div>
  );
}


export default EditReservation;
