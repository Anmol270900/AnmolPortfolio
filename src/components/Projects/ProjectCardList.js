import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardList = ({robots}) => {
	const cardComponent = robots.map((user, i) => {
		return <ProjectCard 
		key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		link={robots[i].link}
		imagesource={robots[i].imagesource}
		/>
	})
	return(<div>{cardComponent}</div>);
}
export default ProjectCardList;