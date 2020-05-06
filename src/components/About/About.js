import React from 'react';

const About = ({onRouteChange, route}) => {
  return (
  	<div >
	   <div
	   		className="ma3 pa4 br3 grow f4 link ph3 pv2 dib white wall shadow-1 ba b--white"
	   		onClick={route!=='about' ? ()=>onRouteChange('about') : ()=>onRouteChange('')}
	   		>
	   		About
	   	</div>
    </div>
  );
}

export default About;