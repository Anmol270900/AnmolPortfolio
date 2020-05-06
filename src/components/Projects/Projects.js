import React from 'react';

const Projects = ({onRouteChange, route}) => {
  return (
  	<div>
	    <div 
	   		className="ma3 pa4 br3 grow f4 link ph3 pv2 dib white wall shadow-1 ba b--white"
	   		onClick={route!=='projects' ? ()=>onRouteChange('projects') : ()=>onRouteChange('')}
	   		>
	   		Projects
	   	</div>
    </div>
  );
}

export default Projects;