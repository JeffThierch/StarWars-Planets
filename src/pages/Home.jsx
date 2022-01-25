import React, { useContext } from 'react';
import Table from '../components/Table';
import AplicationContext from '../context/AplicationContext';
import useFetchData from '../hooks/useFetchData';

export default function Home() {
  const { data, saveAPIData } = useContext(AplicationContext);
  useFetchData(saveAPIData);
  console.log(data);
  return <Table />;
}
