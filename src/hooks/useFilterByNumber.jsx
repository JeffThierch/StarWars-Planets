import { useEffect, useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import { sortArrayInAlphabeticOrder, returnFilterPlanet } from '../helpers';

const useFilterByNumber = () => {
  const {
    filterByNumericValues,
    filterByName: { planetsByName },
    setFilteredPlanets,
    filteredPlanets,
  } = useContext(AplicationContext);
  useEffect(() => {
    if (filterByNumericValues.length > 0 && filterByNumericValues.length < 2) {
      const {
        column,
        comparison,
        value,
      } = filterByNumericValues[filterByNumericValues.length - 1];

      const otherFilters = returnFilterPlanet(
        column, comparison, value, planetsByName,
      );

      setFilteredPlanets(otherFilters);
    } else if (filterByNumericValues.length >= 2) {
      const {
        column,
        comparison,
        value,
      } = filterByNumericValues[filterByNumericValues.length - 1];

      const otherFilters = returnFilterPlanet(
        column, comparison, value, filteredPlanets,
      );

      setFilteredPlanets(otherFilters);
    } else {
      const sortedPlanets = sortArrayInAlphabeticOrder(planetsByName);

      setFilteredPlanets(sortedPlanets);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues, planetsByName, setFilteredPlanets]);
};

export default useFilterByNumber;
