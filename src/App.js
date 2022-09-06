import { React } from 'react';
import Header from './components/Header';
import ClimateData from './components/ClimateData';
import './App.css';

const App = () => {
  return (
    <main>
      <Header />
      <ClimateData />
    </main>
  );
};

export default App;
