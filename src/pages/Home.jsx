import React, { useContext } from 'react';
import FilterName from '../components/FilterName';
import Header from '../components/Header';
import Table from '../components/Table';
import AplicationContext from '../context/AplicationContext';
import useFetchData from '../hooks/useFetchData';

export default function Home() {
  const { saveAPIData } = useContext(AplicationContext);
  useFetchData(saveAPIData);
  return (
    <>
      <Header />
      <main>
        <FilterName />
        <Table />
      </main>
    </>
  );
}
