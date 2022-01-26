import React from 'react';
import FilterByNumericValues from './FilterByNumericValues';
import OrderColumns from './OrderColumns';

export default function Filters() {
  return (
    <section>
      <FilterByNumericValues />
      <OrderColumns />
    </section>
  );
}
