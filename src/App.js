import Light from './assets/light.svg'
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Nft from './components/Nft/Nft';

function App() {
  return (
    <div className='main-bg' >
       <img src={Light} alt="" className="lig-4"/>
      <Navbar/>
      <Hero/>
      <Nft/>
   
    </div>
  );
}

export default App;
