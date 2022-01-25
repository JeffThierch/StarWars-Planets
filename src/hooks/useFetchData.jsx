import { useEffect } from 'react';
import fetchStarWars from '../services/fetchStarWars';

const useFetchData = (callback) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStarWars();
      callback(data);
    };
    fetchData();
  }, [callback]);
};

export default useFetchData;
