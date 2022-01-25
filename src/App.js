import React from 'react';
import './App.css';
import AplicationProvider from './context/AplicationProvider';
import Home from './pages/Home';

function App() {
  return (
    <AplicationProvider>
      <Home />
    </AplicationProvider>
  );
}

export default App;
