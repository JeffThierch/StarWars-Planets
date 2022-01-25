import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import { tableHeadInfos } from '../data/data';
import renderTableData from '../helpers';

export default function Table() {
  const {
    data: { results },
    filterByName: { filteredPlanetsByName },
  } = useContext(AplicationContext);

  return (
    <table>
      <thead>
        <tr>
          {tableHeadInfos.map((info) => <th key={ info }>{info}</th>)}
        </tr>
      </thead>
      {results && (
        <tbody>
          {renderTableData(filteredPlanetsByName)}
        </tbody>
      )}
    </table>
  );
}
