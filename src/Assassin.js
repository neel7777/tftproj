import React from 'react';
import zed from './img/zed.webp';
import ekko from './img/ekko.webp';

const Assassin = () => {
    return (
        <div className='home'>
            <h1 className="main" >Infiltrators</h1>
            <div className='first'>
                <img src={zed} alt='zed'/>
                <p>
                        El Clasico. Infiltrators is my second favorite and most efficient comp used to climb. I credit most of the success
                    of this comp to a very smooth early/mid game, due to the fact that carries are left unprotected for the early levels .The core build involves an early zed/noc with a tanky front line of
                    either brawlers or vanguard. The major key to mid game is finding shaco. I cannot stress enough just how op this unit
                    is. A 2 star shaco with items will singlehandedly secure you a winstreak heading into late game. On Shaco, I usually prefer any
                    mix of IE, LW, BT, red buff or ga.
                </p>

            </div>
            <div className='first'>
                <p>
                    After a successful mid game, if you can find Infiltrators Talons, try to make either
                    wukong or riven into an infiltrator. Round out the comp with 3 more chronos such as shen, blitz, and thresh. With this
                    comp online, your infiltrators will begin with a 120% attk speed bonus with an additional scaling 15% every 3.5 seconds.
                    Fights will be quick and bloody, and hopefully you can end the game quickly. The major downside to this comp is the struggle
                    vs other completed defensive comps.        
                </p>
                <img src={ekko} alt='ekko' />
            </div>
            <div className='first'>
                <p>
                    Best case scenario is to find the infiltrator item, but obviously that is not always going to happen. Alternative game plan 
                    would be to go for a less ham and more rounded composition. I would recommend 4 brawlers, 4 assassins, and a token legendary minion
                    for late game (sol, urgot etc.) The power level of Legendaries compared to other units is at such a disparity that even 1 stars can have
                    more influence than some 2 stars. We will touch upon the broken-ness of legendaries in our Legendary and Friends composition.
                </p>
            </div>
            <div className='first'>
                <p>
                    As a parting statement, I will review the item usage for this particular composition. One thing to highlight is recurve bow. Since
                    our synergies grant us an attack speed bonus, this item is usually saved for exactly last whisper, infiltrator's talon, or a rapid fire cannon.
                    In the carousel, prioritize bf swords, rods, and tears for more power/mana on your shaco, fizz, ekko. These units will likely be the carries,
                    so try to stack them as much as possible. GL!

                </p>
            </div>
        </div>
    )
}

export default Assassin;