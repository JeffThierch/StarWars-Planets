import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [planetsByName, setPlanetsByName] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const changeOrderValue = (columnValue, sortType) => {
    setOrder({
      column: columnValue,
      sort: sortType,
    });
  };

  const orderItems = (columnValue, sortValue) => {
    const orderedPlanets = filteredPlanets.sort((a, b) => {
      if (sortValue === 'ASC') {
        return a[columnValue] - b[columnValue];
      }
      return b[columnValue] - a[columnValue];
    });

    setFilteredPlanets(orderedPlanets);
    changeOrderValue(columnValue, sortValue);
  };

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
    order,
    setOrder,
    saveAPIData: setData,
    setName,
    setFilteredPlanets,
    setFilterByNumerericValues,
    setPlanetsByName,
    removeFilterByNumericValue,
    changeOrderValue,
    orderItems,
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
