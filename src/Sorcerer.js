import React from 'react';
import soraka from './img/soraka.webp';
import ahri from './img/ahri.webp';




const Sorcerer = () => {

    return (
        <div className='home'>
            <h1 className="main">Sorcerer/Star Guardian</h1>
            <div className='first'>
                <p>
                This composition departs from our comfortable comps of early game supremacy and delves into a less stable game plan of tactically
                losing to acquire carousel dominance. This comp is not for the faint of heart, owing mostly to the acceptance of losing health in 
                the early game stages. 
                </p>
            </div>
            <div className='first'>
                <img src={ahri} className='ahri' alt='ahri' />
            </div>
            <div className='first'>
                <p>
                    As this composition is a bit more tricky to play, the obvious payout is that it is a late game powerhouse. If you manage to get 
                    online with ideal items, you will have a self-sustaining, cc infested composition that will be difficult to beat. 
                </p>
            </div>
            <div className='first'>
                <div className='second'>
                <h1>Champs to go for: </h1>
                    <ul>
                    <li>Zoe</li>
                    <li>Twisted Fate</li>
                    <li>Poppy</li>
                    <li>Annie</li>
                    <li>Ahri</li>
                    <li>Syndra</li>
                    <li>Viktor</li>
                    <li>Soraka</li>
                    <li>Janna</li>
                    <li>Xerath</li>
                    <li>Riven</li>
                    </ul>
                </div>
                <div>
                    <img src={soraka} alt='soraka' />
                </div>
          
            </div>
            <div className='first'>
                <p>
                    Clearly, this composition is a bit more flexible, with multiple routes to achieve a completed synergy. You can opt for 6 star guardians
                    4 sorcers, or 6 sorcerers 3 star guardians etc. This is largely dependant on which champions you are offered/2 stars you are able to find.
                    I will recommend a core team of viktor, soraka, and janna. These champions in particular output a tremendous amount of damage, cc, and 
                    sustain which carry the composition. The remaining members of the comp can be fairly open-endeded. Lastly, you will notice that riven 
                    is recommended, despite being neither star guardian or sorcerer. The reason for this is simply that riven is broken; stack her up with items
                    and she is singlehandedly a great tank that can protect the comp until the spell cycles begin.
                </p>
            </div>
            <div className='first'>
                <p>
                    Lastly I will go over the basic strat associated with this comp. As noted earlier, expect to lose majority of fights early on. As this comp
                    comes online at lvl 8-9, you will likely have little success early game. Try collecting sorcerers/star guardians as best as you can while 
                    utilizing other champs to pick up the slack in the meantime. The one benefit is priority in the carousel rounds. Use this advantage to amass
                    a collection of tears, rods, and other items for your viktor/soraka/janna and riven. Note: Ionic spark is especially good in this comp for 
                    obvious reasons. Also, Star guardians charm on viktor can also guarantee multiple spellcasts.                       
                    
                </p>
            </div>
        </div>
    )
}

export default Sorcerer;