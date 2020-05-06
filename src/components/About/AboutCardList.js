import React from 'react';
import AboutCard from './AboutCard';

const AboutCardList = ({robots}) => {
	const cardComponent = robots.map((user, i) => {
		return <AboutCard 
		key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		text={robots[i].text}
		imagesource={robots[i].imagesource}
		/>
	})
	return(<div>{cardComponent}</div>);
}
export default AboutCardList;