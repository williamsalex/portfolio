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

// import React, { Component } from 'react'
// import * as d3 from 'd3'



// class App extends Component {
//     render(){
//       const temperatureData = [ 8, 5, 13, 9, 12 ]
//       d3.select(this.refs.temperatures)
//         .selectAll("h2")
//         .data(temperatureData)
//         .enter()
//         .append("h2")
//         .text("New Temperature")
//       return(<div ref="temperatures"></div>)
//     }
// }
// export default App