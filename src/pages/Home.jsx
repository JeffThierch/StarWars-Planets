import React, { useContext } from 'react';
import Table from '../components/Table';
import AplicationContext from '../context/AplicationContext';
import useFetchData from '../hooks/useFetchData';

export default function Home() {
  const { saveAPIData } = useContext(AplicationContext);
  useFetchData(saveAPIData);
  return (
    <main>
      <Table />
    </main>
  );
}
