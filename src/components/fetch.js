import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'fad6989dda3803c9fb66ec36be17ab2f';

const fetchRequest = async page => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY_API}&page=${page}`
  );
  return response.data;
};

export { fetchRequest };
