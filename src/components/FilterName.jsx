import React, { useContext, useEffect } from 'react';
import AplicationContext from '../context/AplicationContext';

export default function FilterName() {
  const {
    filterByName: { name },
    setName,
    setFilteredPlanets,
    data: { results },
  } = useContext(AplicationContext);

  useEffect(() => {
    if (results) {
      const filteredByName = results.filter(({ name: planetName }) => (
        planetName.toLowerCase().includes(name.toLowerCase())
      ));
      setFilteredPlanets(filteredByName);
    }
  }, [name, results, setFilteredPlanets]);
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
