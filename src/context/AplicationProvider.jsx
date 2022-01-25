import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const ContextValue = {
    data,
    saveAPIData: setData,
    filterByName: {
      name,
      filteredPlanetsByName: filteredPlanets,
    },
    setName,
    setFilteredPlanets,
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
