import React from 'react';

const ProjectCard= (props) =>{
	return(
		<a href={props.link}>
		<div className='ma3 pa4 br3 grow f4 link ph3 pv2 dib white wall shadow-5 ba b--white tc'>
			<img alt='contact' src={require(`${props.imagesource}`)} width="250" height="150"/>
			<div>
				<p>{props.name}</p>
			</div>
		</div>
	</a>
	);
}

export default ProjectCard;