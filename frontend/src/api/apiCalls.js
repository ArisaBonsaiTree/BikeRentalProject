import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const getAllStations = async () => {
  try {
    const response = await axios.get(`${baseUrl}/stations`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBikesByStation = async (stationId) => {
    try {
      const response = await axios.get(`${baseUrl}/bikes/${stationId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };