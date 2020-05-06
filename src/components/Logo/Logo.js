import React from 'react';
import Tilt from 'react-tilt';
import Pic from './Pic.jpg';
// import './Logo.css';

const Logo = () => {
  return (
  	<div className='dib'>
	    <div className='ma4 mt0'>
	      <Tilt className="Tilt br2 shadow-1 wall ba b--white" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
	        <div className="Tilt-inner pa3">
	          <img style={{paddingTop: '5px'}} alt='logo' src={Pic}/>
	        </div>
	      </Tilt>
	    </div>
    </div>
  );
}

export default Logo;