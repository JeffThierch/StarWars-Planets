import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const setFilterByNumerericValues = (columnValue, comparisonValue, inputValue) => {
    setFilterByNumericValues(
      [
        ...filterByNumericValues,
        { column: columnValue, comparison: comparisonValue, value: inputValue },
      ],
    );
  };

  const ContextValue = {
    data,
    filterByNumericValues,
    filterByName: {
      name,
    },
    filteredPlanets,
    saveAPIData: setData,
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
