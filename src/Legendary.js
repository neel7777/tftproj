import React from 'react';
import asol from './img/asol.webp';

const Legendary = () => {
    return (
        <div className='home'>
            <h1 className="main">Legendaries and Friends</h1>
            <div className='first'>
                <p>
                    Finally we arrive to my favorite composition. This comp highlights what is (in my opinion) the most op facets of tft 
                    in the current patch. Epics and Legendaries are simply too strong. You can mindlessly go through the motions in the earlier
                    levels, conserving health and gold until you reach lvl 7, where the magic begins. At this level, you will begin to find Epics
                    and legendaries, and can start to put a comp together.
                </p>
            </div>
            <div className='first'>
                <img src={asol} alt='sol' className='jinx'/>
            </div>
            <div className='first'>
                <p>
                    The idea with this comp is fairly straightforward. Gather an army of 2 star epics and legendaries, fraught with cc, damage and
                    tankiness, and steamroll the opposition. A completed comp looks something like wukong, gnar, fizz, ekko, aurelion sol, urgot, 
                    shen, soraka blitz riven. This comp gives a tanky frontline, 4 chrono, and a massive cc chain in the form of wukong, gnar, fizz
                    and ekko ult. Meanwhile, sol puts up insane damage numbers and urgot will delete a champion every few seconds. As this comp is very
                    versatile and has many carries, there is alot of freedom in terms of item usage. I would recommend tanky items on sol and mana items
                    on urgot to witness true unbridled broken-ness. Enjoy!
                </p>
            </div>
        </div>
    )
}

export default Legendary;