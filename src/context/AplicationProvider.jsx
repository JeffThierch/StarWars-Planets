import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('igual a');
  const [value, setValue] = useState(0);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const setFilterByNumerericValues = (columnValue, comparisonValue, inputValue) => {
    setColumn(columnValue);
    setComparison(comparisonValue);
    setValue(inputValue);
  };

  const ContextValue = {
    data,
    saveAPIData: setData,
    filterByNumericValues: [{ column, comparison, value }],
    filterByName: {
      name,
      filteredPlanetsByName: filteredPlanets,
    },
    setName,
    setFilteredPlanets,
    setFilterByNumerericValues,
  };
  return (
    <AplicationContext.Provider value={ ContextValue }>
      { children }
    </AplicationContext.Provider>
  );
}

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
