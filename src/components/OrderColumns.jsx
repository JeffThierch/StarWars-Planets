import React, { useContext, useState } from 'react';
import { columnFilterOptions } from '../data/data';
import AplicationContext from '../context/AplicationContext';

export default function OrderColumns() {
  const [column, setColumn] = useState('population');
  const [orderType, setOrderType] = useState('ASC');
  const { orderItems } = useContext(AplicationContext);
  return (
    <form className="FilterOrder-container">
      <select
        data-testid="column-sort"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columnFilterOptions.map(({ columnValue, value }) => (
          <option
            value={ columnValue }
            key={ columnValue }
          >
            {value}
          </option>
        ))}
      </select>
      <label htmlFor="radio-asc">
        <input
          type="radio"
          value="ASC"
          name="order-type"
          data-testid="column-sort-input-asc"
          id="radio-asc"
          onChange={ ({ target }) => setOrderType(target.value) }
        />
        Ascending
      </label>
      <label htmlFor="radio-desc">
        <input
          type="radio"
          value="DESC"
          name="order-type"
          id="radio-desc"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setOrderType(target.value) }
        />
        Descending
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => orderItems(column, orderType) }
      >
        Sort
      </button>
    </form>
  );
}
