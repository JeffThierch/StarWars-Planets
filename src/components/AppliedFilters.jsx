import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import AplicationContext from '../context/AplicationContext';
import '../styles/AppliedFilter.css';
import { filtersComparison, filterColumn } from '../data/data';

export default function AppliedFilters() {
  const {
    filterByNumericValues,
    removeFilterByNumericValue,
  } = useContext(AplicationContext);

  return (
    <section className="Filters-container">
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map(({ column, comparison, value }) => (
          <section
            className="filter-applied"
            data-testid="filter"
            key={ column }
          >
            {`${filterColumn[column]} ${filtersComparison[comparison]} ${value}`}
            <button
              className="remove-filter-btn"
              onClick={ () => removeFilterByNumericValue(column) }
              type="button"
            >
              <FaTrashAlt className="filters-trash-svg" />
            </button>
          </section>
        ))
      )}
    </section>
  );
}
