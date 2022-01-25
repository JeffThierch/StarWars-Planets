import { useEffect, useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

const useFilter = () => {
  const {
    filterByName: { name },
    setFilteredPlanets,
    data: { results },
  } = useContext(AplicationContext);

  useEffect(() => {
    if (results) {
      const filteredByName = results.filter(({ name: planetName }) => (
        planetName.toLowerCase().includes(name.toLowerCase())
      ));
      setFilteredPlanets(filteredByName);
    }
  }, [name, results, setFilteredPlanets]);
};

export default useFilter;
