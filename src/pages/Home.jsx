import React, { useContext } from 'react';
import AppliedFilters from '../components/AppliedFilters';
import FilterName from '../components/FilterName';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
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
        <Filters />
        <AppliedFilters />
        <section className="table-wrapper Flipped">
          <Table />
        </section>
      </main>
      <Footer />
    </>
  );
}
