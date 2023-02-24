import Navbar from './components/Navbar/Navbar';
import Topside from './components/Topside/Topside';
import Views from './components/View/Views';
import StockProfile from './pages/StockProfile';

function App() {
  
  return (
    <>
      <Navbar />
      <Topside></Topside>
      <Views></Views>

      {/* <StockProfile/> */}
    </>
  );
}

export default App;
