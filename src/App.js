import React from 'react';
import './stylesheets/background.scss'
import Navbar from './components/nav'
import Homepage from './components/homepage'

function App() {
  return (
    <div className = 'main'>
      <Homepage/>
      <Navbar/>
    </div>
  )
}

export default App;
