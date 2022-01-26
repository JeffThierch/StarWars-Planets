import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [planetsByName, setPlanetsByName] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const setFilterByNumerericValues = (columnValue, comparisonValue, inputValue) => {
    setFilterByNumericValues(
      [
        ...filterByNumericValues,
        { column: columnValue, comparison: comparisonValue, value: inputValue },
      ],
    );
  };

  const removeFilterByNumericValue = (columnValue) => {
    const filteredValues = filterByNumericValues
      .filter(({ column }) => column !== columnValue);

    setFilterByNumericValues(
      [
        ...filteredValues,
      ],
    );
  };

  const ContextValue = {
    data,
    filterByNumericValues,
    filterByName: {
      name,
      planetsByName,
    },
    filteredPlanets,
    saveAPIData: setData,
    setName,
    setFilteredPlanets,
    setFilterByNumerericValues,
    setPlanetsByName,
    removeFilterByNumericValue,
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
