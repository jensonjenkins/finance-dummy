import Navbar from './components/Navbar';
import Topside from './components/Topside';
import MainD from './data/MainD';
import YahooData from './data/YahooData';
import ChartjsDemo from './data/ChartjsDemo';
import { Line } from "react-chartjs-2";
import { useState } from 'react';

import './App.css';

function App() {


  return (
    <>
      <Navbar />
      <Topside></Topside>
      {/* <MainD></MainD>
      <YahooData></YahooData> */}
      <ChartjsDemo></ChartjsDemo>


    </>
  );
}

export default App;
