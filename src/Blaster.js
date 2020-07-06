import React from 'react';
import jinx from './img/jinx.webp'

const Blaster = () => {
    return (
        <div className='home'>
            <h1 className="main">Brawler/Blasters</h1>
        
        <div className='first'>
            <p>
                Brawlers/Blasters is another straightforward/simple composition to execute. As the name would suggest, the composition mixes a
                tanky front line of brawlers with the damage threat of blasters. Ideally, you would quickly secure 4 brawlers to thrive during the 
                early game, while building towards 4 blasters and hoarding jinx items.
            </p>

        </div>
        <div className='first'>
            <img src={jinx} className='jinx' alt='jinx'/>
        </div>
        <div className='first'>
            <p>
            Jinx is the main threat of this composition. Similar to actual league of legends, once this champion's passive ability is activated,
            she snowballs the entire battle into a decisive victory. As blaster's synergy fires additional attacks at multiple enemies, the best 
            way to take advantage of this is to stack her with good on hit/crit items, such as red buff, IE, and last whisper. Other good items
            would be Giant slayer and guardian angel as well. Another suggestion is to tactically place a blitz near her, to accelerate her passive
            coming online.
            </p>
        </div>
        <div className='first'>
            <p>
            As a parting note, I will say that I have struggled with this comp simply due to jinx's flexibility. Jinx can be a late game carry in
            many comps, and so she may be coveted by many opponents around the lvl 7 mark. Make sure to scout and be ready to pivot if other players
            have already acquired her. And as always, after acquiring 4 brawlers/ 4 blasters, round out your comp with an op legendary. 
            </p>
        </div>
        </div>
    )
}

export default Blaster;