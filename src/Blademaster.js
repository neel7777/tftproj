import React from 'react';
import riven from './img/riven.webp';

const Blademaster = () => {
    return (
        <div className='home'>
            <h1 className="main">Blademasters</h1>
            <div className='first'>
                <p>
                    Blademaster is another comp that is fairly straightforward to compile, but a bit clunky in action. The obvious game plan is
                    to collect every blademaster possible, until you reach 6 and acquire the synergy of 65% chance to trigger additional attacks
                    vs opponents. The major carries with this comp will be the riven and irelia. This is a pretty one-dimensional comp in terms of 
                    blademasters: just collect 6, stack the ad items on irelia and the ap on riven. Ap riven will be nerfed for sure, her shield 
                    scales with AP, making her near unkillable.
                </p>               

            </div>
            <div className='first'>
            <img className='jinx' src={riven} alt='riven' />
            </div>
            <div className='first'>
                <p>
                    The clunkiness of this comp stems from the logistic issues with 6 melee champs. You will likely position them all near the front
                    of the board, and can be flexible as to the other 3 champs that round out the composition. With 6 blademasters, you already have 2
                    chrono, 2/3 hextech, 2/3 rebel, etc. Feel free to experiment with different champions as you reach lvl 9, but random legendaries
                    will tend to be the best choice.
                </p>
            </div>
        </div>
    )
}

export default Blademaster;