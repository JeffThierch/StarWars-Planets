import React, { useContext, useState } from 'react';
import AplicationContext from '../context/AplicationContext';
import { columnFilterOptions, comparisonFilterOptions } from '../data/data';
import useFilterByNumber from '../hooks/useFilterByNumber';

export default function Filters() {
  const [columnSelectValue, setColumnValue] = useState('population');
  const [comparisonSelectValue, setComparisonValue] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);

  const {
    setFilterByNumerericValues,
    filterByNumericValues,
  } = useContext(AplicationContext);

  useFilterByNumber();

  return (
    <form>

      <select
        data-testid="column-filter"
        value={ columnSelectValue }
        onChange={ ({ target }) => setColumnValue(target.value) }
      >
        {columnFilterOptions.map((columnValue) => {
          if (filterByNumericValues.some(({ column }) => column === columnValue)) {
            return false;
          }
          return (
            <option
              value={ columnValue }
              key={ columnValue }
            >
              {columnValue}
            </option>);
        })}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonSelectValue }
        onChange={ ({ target }) => setComparisonValue(target.value) }
      >
        {comparisonFilterOptions.map((comparisonValue) => (
          <option
            value={ comparisonValue }
            key={ comparisonValue }
          >
            {comparisonValue}
          </option>
        ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={ inputValue }
        onChange={ ({ target }) => setInputValue(target.value) }
        placeholder="Valor do filtro"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumerericValues(
          columnSelectValue, comparisonSelectValue, inputValue,
        ) }
      >
        Filtrar
      </button>
    </form>);
}
