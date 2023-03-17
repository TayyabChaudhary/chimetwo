import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import RegisterWith from './Pages/RegisterWith/RegisterWith';
import InvestNow from './Pages/invest_small_busniess/Invest_Small_Busniess';
import FooterTwo from './components/FooterTwo';
import TwistedEggroll from './Pages/twisted_eggroll/twisted_eggroll';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} /> 
          <Route path='/registerWith' element={<RegisterWith />} /> 
          <Route path='/invest_now' element={<InvestNow />} /> 
          <Route path='/twisted_enroll' element={<TwistedEggroll />} />
        </Routes>
        <FooterTwo />
      </BrowserRouter>
    </div>
  );
}

export default App;
