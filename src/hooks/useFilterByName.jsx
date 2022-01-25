import { useEffect, useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

const useFilterByName = () => {
  const {
    filterByName: { name },
    setPlanetsByName,
    setFilteredPlanets,
    filterByNumericValues,
    data: { results },
  } = useContext(AplicationContext);

  useEffect(() => {
    if (results) {
      const filteredByName = results.filter(({ name: planetName }) => (
        planetName.toLowerCase().includes(name.toLowerCase())
      ));
      setPlanetsByName(filteredByName);

      if (filterByNumericValues.length > 0) {
        const {
          column,
          comparison,
          value,
        } = filterByNumericValues[filterByNumericValues.length - 1];

        const otherFilters = filteredByName.filter((planet) => {
          if (value === '') {
            return planet;
          }
          if (comparison === 'maior que') {
            return Number(planet[column]) > Number(value);
          }
          if (comparison === 'menor que') {
            return Number(planet[column]) < Number(value);
          }
          if (comparison === 'igual a') {
            return Number(planet[column]) === Number(value);
          }
          return planet;
        });

        setFilteredPlanets(otherFilters);
      } else {
        setFilteredPlanets(filteredByName);
      }
    }
  }, [filterByNumericValues, name, results, setFilteredPlanets, setPlanetsByName]);
};

export default useFilterByName;
