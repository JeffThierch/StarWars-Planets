import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';

export default function AppliedFilters() {
  const {
    filterByNumericValues,
    removeFilterByNumericValue,
  } = useContext(AplicationContext);

  return (
    <section>
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map(({ column, comparison, value }) => (
          <section
            data-testid="filter"
            key={ column }
          >
            {`${column} ${comparison} ${value}`}
            <button
              onClick={ () => removeFilterByNumericValue(column) }
              type="button"
            >
              X
            </button>
          </section>
        ))
      )}
    </section>
  );
}
