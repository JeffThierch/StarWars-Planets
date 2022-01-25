import React from 'react';
import PropTypes from 'prop-types';
import AplicationContext from './AplicationContext';

export default function AplicationProvider({ children }) {
  const ContextValue = {};
  return (
    <AplicationContext.Provider value={ ContextValue }>
      { children }
    </AplicationContext.Provider>
  );
}

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
