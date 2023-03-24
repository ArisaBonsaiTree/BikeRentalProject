import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const getStations = async () => {
  try {
    const response = await axios.get(`${baseUrl}/stations`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
