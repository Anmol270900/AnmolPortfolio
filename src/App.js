import React, {Component} from 'react';
import Logo from './components/Logo/Logo';
import About from './components/About/About';
import AboutCardList from './components/About/AboutCardList';
import {AboutInfo} from './components/About/AboutInfo';
import Projects from './components/Projects/Projects';
import ProjectCardList from './components/Projects/ProjectCardList';
import {ProjectInfo} from './components/Projects/ProjectInfo';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import ContactCardList from './components/Contact/ContactCardList';
import {ContactInfo} from './components/Contact/ContactInfo';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
        particles: {
          value: 30,
          density: {
            enable: true,
            value_area: 800
          }
        }
}

class App extends Component {

  constructor(){
    super()
    this.state={
    route: ''
    }
  }

  onRouteChange=(route) => {
      this.setState({route: route});
      console.log("route changed!!!", route)
  }

  render(){
    return (
      <div className="App">

      <Particles className='particles'
        params={particlesOptions}
      />
      <div>
        <Contact onRouteChange={this.onRouteChange} route={this.state.route}/>
        { this.state.route==='contact' ? <ContactCardList robots={ContactInfo} /> : null }
      </div> 

        <Logo />
        <h1>Hi! I am Anmol</h1>
        <div className='center'>
          <About onRouteChange={this.onRouteChange} route={this.state.route}/>
          <Projects onRouteChange={this.onRouteChange} route={this.state.route}/>
          <Resume />
        </div>
          {this.state.route==='projects' ? <ProjectCardList robots={ProjectInfo} /> : null}
          {this.state.route==='about' ? <AboutCardList robots={AboutInfo} /> : null }
      </div>
      
    );
  }
}

export default App;
