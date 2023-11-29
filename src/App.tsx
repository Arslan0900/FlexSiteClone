import React from 'react';
import './globle.scss';
import Home from './components/Home';
import Process from './components/Process';
import Textimonial from "./components/Textimonial"
import Services from './components/Services';
import Facts from './components/Facts';
import About from './components/About';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Process/>
      <Textimonial/>
      <Services/>
      <Facts/>
      <About/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
