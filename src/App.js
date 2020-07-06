import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './Navigation';
import Homepage from './homepage';
import Assassin from './Assassin';
import Blademaster from './Blademaster';
import Blaster from './Blaster';
import Sorcerer from './Sorcerer';
import Legendary from './Legendary';


function App() {
  return (
    
    <div className='app'>
      <header>
        <Navigation/>
      </header>
      
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route exact path = '/assassin' component = {Assassin}/>
        <Route exact path = '/blaster' component = {Blaster}/>
        <Route exact path = '/sorcerer' component = {Sorcerer}/>
        <Route exact path = '/blademaster' component = {Blademaster}/>
        <Route exact path = '/legendary' component = {Legendary}/>


      </Switch>

      
      

      

    
    
    
    
      
    
    
    </div>
    

  

  
  
  )
  
}

export default App;
