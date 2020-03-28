import React, { Component } from 'react';
import '../stylesheets/background.scss'
import Navbar from './nav'
import Homepage from './homepage'
import Resume from './resume'
import Projects from './projects'
import About from './about'
import Contact from './contact'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <main>
      <div className = 'main'>
      <Navbar/>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/resume' component = {Resume}/>
          <Route path = '/projects' component = {Projects}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/contact' component = {Contact}/>
          <Route component = {Error} />
        </Switch>
      </div>
      </main>
    )
  }

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