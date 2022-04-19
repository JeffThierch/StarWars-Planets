export const tableHeadInfos = [
  'Name',
  'Rotation Period',
  'Orital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

export const columnFilterOptions = [
  {
    columnValue: 'population',
    value: 'Population',
  },
  {
    columnValue: 'orbital_period',
    value: 'Orital Period',
  },
  {
    columnValue: 'diameter',
    value: 'Diameter',
  },
  {
    columnValue: 'rotation_period',
    value: 'Rotation Period',
  },
  {
    columnValue: 'surface_water',
    value: 'Surface Water',
  },
];

export const comparisonFilterOptions = [
  {
    comparisonValue: 'maior que',
    value: 'Greater than',
  },
  {
    comparisonValue: 'menor que',
    value: 'Less than',
  },
  {
    comparisonValue: 'igual a',
    value: 'Equal to',
  },
];

export const filtersComparison = {
  'maior que': 'Greater than',
  'menor que': 'Less than',
  'igual a': 'Equal to',
};

export const filterColumn = {
  population: 'Population',
  orbital_period: 'Orital Period',
  diameter: 'Diameter',
  rotation_period: 'Rotation Period',
  surface_water: 'Surface Water',
};
