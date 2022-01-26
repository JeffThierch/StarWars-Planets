import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import useFilterByName from '../hooks/useFilterByName';
import '../styles/FilterName.css';

export default function FilterName() {
  const {
    filterByName: { name },
    setName,
  } = useContext(AplicationContext);

  useFilterByName();

  return (
    <section className="FilterName-container">
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filter by planet name"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </section>
  );
}
