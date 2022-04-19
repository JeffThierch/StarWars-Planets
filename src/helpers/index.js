import React from 'react';

const renderTableData = (planetsData) => planetsData.map((
  { name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    created,
    edited,
    films,
    gravity,
    population,
    surface_water: surfaceWater,
    terrain,
    url },
) => (
  <tr key={ name }>
    <td data-testid="planet-name" className="Table-planetname">{name}</td>
    <td>{rotationPeriod}</td>
    <td>{orbitalPeriod}</td>
    <td>{diameter}</td>
    <td className="Table-planetclimate">{climate}</td>
    <td>{gravity}</td>
    <td>{terrain}</td>
    <td>{surfaceWater}</td>
    <td className="Table-planetpopulation">{population}</td>
    <td>{films}</td>
    <td>{created}</td>
    <td>{edited}</td>
    <td>{url}</td>
  </tr>
));

export const sortArrayInAlphabeticOrder = (array) => {
  const POSITIVE_MOD_SORT_VALUE = 1;
  const NEGATIVE_MOD_SORT_VALUE = -1;
  const EQUAL_MOD_SORT_VALUE = 0;

  return array.sort((a, b) => {
    if (a.name > b.name) {
      return POSITIVE_MOD_SORT_VALUE;
    }
    if (a.name < b.name) {
      return NEGATIVE_MOD_SORT_VALUE;
    }
    // a must be equal to b
    return EQUAL_MOD_SORT_VALUE;
  });
};

export const returnFilterPlanet = (column, comparison, value, arrayOfPlanets) => (
  arrayOfPlanets.filter((planet) => {
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return planet;
    }
  }));

export default renderTableData;
