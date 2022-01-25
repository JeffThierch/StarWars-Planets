import React, { useContext } from 'react';
import AplicationContext from '../context/AplicationContext';
import tableHeadInfos from '../data/data';

export default function Table() {
  const { data: { results } } = useContext(AplicationContext);
  return (
    <table>
      <thead>
        {tableHeadInfos.map((info) => <th key={ info }>{info}</th>)}
      </thead>
    </table>
  );
}
