import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import AplicationProvider from './context/AplicationProvider';

function App() {
  return (
    <AplicationProvider>
      <Routes />
    </AplicationProvider>
  );
}

export default App;
