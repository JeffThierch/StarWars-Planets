import React from 'react';
import FilterByNumericValues from './FilterByNumericValues';
import OrderColumns from './OrderColumns';
import '../styles/Filters.css';

export default function Filters() {
  return (
    <section className="Filters-filter-container">
      <FilterByNumericValues />
      <OrderColumns />
    </section>
  );
}
