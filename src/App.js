
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Tocenomics from './components/Tocenomics/Tocenomics';
import Header from './components/Header/Header';
import Terminalogia from './components/Terminalogia/Terminalogia';
import Web3 from './components/Web3/Web3';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/tokenomics' element={<Tocenomics /> }/>
        <Route path='/terminalogia' element={<Terminalogia /> }/>
        <Route path='/web3' element={<Web3 /> }/>
      </Routes>
    </div>
  );
}

export default App;
