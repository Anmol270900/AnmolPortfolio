import React from 'react';

const Contact = ({onRouteChange, route}) => {
  return (
  	<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
		<div
	   		className="ma3 pa4 br3 grow f4 ph3 pv2 white wall shadow-1 ba b--white"
	   		onClick={route!=='contact' ? ()=>onRouteChange('contact') : ()=>onRouteChange('')}
	   	>
	   		Contact
	   	</div>    
	</nav>
  );
}



export default Contact;