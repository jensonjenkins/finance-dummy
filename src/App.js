import Navbar from './components/Navbar';
import Topside from './components/Topside';
import MainD from './data/MainD';
import LineChart from './trial/LineChart';
import { UserData } from './trial/Data';
import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2,
        borderWidth: 1,
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
