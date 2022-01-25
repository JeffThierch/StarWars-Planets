import { useEffect, useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

const useFilterByName = () => {
  const {
    filterByName: { name },
    setPlanetsByName,
    filterByNumericValues,
    data: { results },
  } = useContext(AplicationContext);

  useEffect(() => {
    if (results) {
      const filteredByName = results.filter(({ name: planetName }) => (
        planetName.toLowerCase().includes(name.toLowerCase())
      ));
      setPlanetsByName(filteredByName);
    }
  }, [filterByNumericValues, name, results, setPlanetsByName]);
};

export default useFilterByName;
