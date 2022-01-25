import { useEffect, useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

const useFilterByNumber = () => {
  const {
    filterByNumericValues,
    filterByName: { planetsByName },
    setFilteredPlanets,
  } = useContext(AplicationContext);
  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      const {
        column,
        comparison,
        value,
      } = filterByNumericValues[filterByNumericValues.length - 1];

      const otherFilters = planetsByName.filter((planet) => {
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
      setFilteredPlanets(planetsByName);
    }
  }, [filterByNumericValues, planetsByName, setFilteredPlanets]);
};

export default useFilterByNumber;
