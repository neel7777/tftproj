import React from 'react';

import {
    
    Navbar,
    Button
    
  } from 'reactstrap';

const Navigation = props => {
    

    
    return (
        <div>
          <Navbar color="dark" fixed='top' light expand="md" float='right'>
              <a href = '/'>
          <Button className = 'navbut' size="lg" color="primary" position = 'right'>Home</Button>
              </a>
            
            
          </Navbar>
        </div>
      );

}

export default Navigation;