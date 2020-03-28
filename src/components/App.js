import React, { Component } from 'react';
import '../stylesheets/background.scss'
import Navbar from './nav'
import Homepage from './homepage'
import Resume from './resume'
import Projects from './projects'
import About from './about'
import Contact from './contact'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

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
