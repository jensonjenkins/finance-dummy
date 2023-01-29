import Navbar from './components/Navbar';
import Topside from './components/Topside';
import MainD from './data/MainD';
import LineChart from './trial/LineChart';

import { UserData } from './trial/Data';
import { useState } from 'react';
import './App.css';

function App() {

  const [userData, setUserData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,],
    datasets: [
      {
        label: "Users Gained",
        data: [1, 2, 6, 4, 8, 5, 8, 2, 9, 1, 0, 5, 7, 9],
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
        pointRadius: 1,
        borderWidth: 2,
        fill: {
          target: 'origin',
          above: 'rgba(75, 192, 192, 0.2)',   // Area will be red above the origin   // And blue below the origin
        }
      },
    ],
  });
  return (
    <>
      <Navbar />
      <Topside></Topside>
      <MainD></MainD>
      <LineChart chartData={userData} />
    </>
  );
}

export default App;
