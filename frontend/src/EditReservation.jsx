// EditReservation.jsx
import React, {useState, useEffect} from 'react';
import {getAllStations, getBikesByStation} from './api/apiCalls'

import SearchBar from './components/SearchBar';
import StationSelect from './components/StationSelect';
import BikeList from './components/BikeList';

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
      <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange} />
      <StationSelect stations={filteredStations} handleStationSelect={handleStationSelect} />
      <BikeList bikes={bikes} handleBikeSelection={handleBikeSelection} />
    </div>
  );
}


export default EditReservation;
