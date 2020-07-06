import React from 'react';

import './App.css';
import fizz from './img/fizz.jpg';
import jinx from './img/jinx.jpg';
import syndra from './img/syndra.jpg';
import riven from './img/riven.jpg';
import sol from './img/sol.jpg';



const Homepage = () => {
    return (
    <div className = 'home'>
        <h1 className='main'>Top TFT Comps (July 2020)</h1>
    
    <div className='each'>
    
      <h1 className='headers'>Infiltrators/Chrono</h1>
    <a href='/assassin'>
      <img src={fizz} alt='fizz'></img>
    </a>
    </div>
    
    <div className='each'>
    <a href='/blaster'>
      <img src={jinx} alt='jinx'></img>
    </a>
    <h1>Brawlers/Blasters</h1>
    </div>
    <div className='each'>
    <h1>Star Guardian/Sorcerer</h1>
    <a href='/sorcerer'>
    <img src={syndra} alt='syndra' />
    </a>
    </div>
    <div className='each'>
    <a href='/blademaster'>
    <img src={riven} alt='riven' />
    </a>
    <h1>Blademaster/Riven Juggernaut</h1>
    
    </div>
    <div className='each'>
    <h1>Legendaries and Friends</h1>
    <a href='/legendary'>
    <img src={sol} alt='sol' />
    </a>
    </div>
    <h3 className='disc'>
      Disclaimer: This is a record of my (plat player ZUUUUUUM) favorite/most effective team comps in patch 10.13 in no particular order.
      This site is a platform to<br></br> practice web development as well as track tft progress. The creator is not responsible
      for any adverse effects to readers' elo. 
    </h3>
        </div>
        
    )
}













export default Homepage;
