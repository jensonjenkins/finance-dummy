import Navbar from './components/Navbar/Navbar';
import Topside from './components/Topside/Topside';
import ChartjsDemo from './data/ChartjsDemo';
import TimeSeriesMonthly from './data/TimeSeriesMonth'
import Home from './components/Home/Home';
import './App.css';

function App() {
  
  return (
    <>
      <Navbar />
      <Topside></Topside>
      <Home></Home>
      {/* <ChartjsDemo></ChartjsDemo>
      <TimeSeriesMonthly></TimeSeriesMonthly> */}


    </>
  );
}

export default App;
