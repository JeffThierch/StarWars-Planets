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
    <td>{name}</td>
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

export default renderTableData;
