import Navbar from './components/Navbar';
import Topside from './components/Topside';
import MainD from './data/MainD';
import { Line } from "react-chartjs-2";
import { useState } from 'react';

import './App.css';

function App() {
 
  return (
    <>
      <Navbar />
      <Topside></Topside>
      <MainD></MainD>
      {/* <Line data = {graph}/> */}

    </>
  );
}

export default App;
