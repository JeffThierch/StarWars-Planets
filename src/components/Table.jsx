import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import { tableHeadInfos } from '../data/data';
import renderTableData from '../helpers';
import '../styles/Table.css';

export default function Table() {
  const {
    filteredPlanets,
    data: { results },
  } = useContext(AplicationContext);

  return (
    <table className="Table-container">
      <thead className="Table-thead-container">
        <tr>
          {tableHeadInfos.map((info) => <th key={ info }>{info}</th>)}
        </tr>
      </thead>
      {results && (
        <tbody className="Table-tbody-container">
          {renderTableData(filteredPlanets)}
        </tbody>
      )}
    </table>
  );
}
