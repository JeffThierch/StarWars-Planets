import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import useFilterByName from '../hooks/useFilterByName';

export default function FilterName() {
  const {
    filterByName: { name },
    setName,
  } = useContext(AplicationContext);

  useFilterByName();

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Planet Name"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </section>
  );
}
