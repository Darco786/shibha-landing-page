import Light from './assets/light.svg'
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Nft from './components/Nft/Nft';
import Mobfooter from './components/Mobfooter/Mobfooter';

function App() {
  return (
    <>
    <div className='main-bg' >
       <img src={Light} alt="" className="lig-4"/>
      <Navbar/>
      <Hero/>
      <Nft/>
   
    </div>
    <Mobfooter/>
    </>
    
  );
}

export default App;
