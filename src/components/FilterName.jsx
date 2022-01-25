import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import useFilter from '../hooks/useFilter';

export default function FilterName() {
  const {
    filterByName: { name },
    setName,
  } = useContext(AplicationContext);

  useFilter();

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
