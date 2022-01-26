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
    <td data-testid="planet-name">{name}</td>
    <td>{rotationPeriod}</td>
    <td>{orbitalPeriod}</td>
    <td>{diameter}</td>
    <td>{climate}</td>
    <td>{gravity}</td>
    <td>{terrain}</td>
    <td>{surfaceWater}</td>
    <td>{population}</td>
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

export default renderTableData;
