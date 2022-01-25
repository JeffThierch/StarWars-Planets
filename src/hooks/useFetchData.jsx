import { useEffect } from 'react';
import fetchStarWars from '../services/fetchStarWars';

const useFetchData = (callback) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchStarWars();
      if (!data.error) {
        callback(data.data);
      }
    };
    fetchData();
  }, [callback]);
};

export default useFetchData;
