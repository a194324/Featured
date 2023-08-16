import React from 'react';
import './App.css';

import Rovs from '../src/components/Rovs';
import Arrivals from '../src/components/Arrivals';
import Featured from '../src/components/Featured';
import Latest from '../src/components/Latest';
import Footer from '../src/components/Footer';

function App() {

  return (
    <div className="App">
      <Rovs/>
      <Arrivals/>
      <Featured/>
      <Latest/>
      <Footer/>
    </div>
  );
}

export default App;
