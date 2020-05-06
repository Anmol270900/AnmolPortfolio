import React from 'react';
import ContactCard from './ContactCard';

const ContactCardList = ({robots}) => {
	const cardComponent = robots.map((user, i) => {
		return <ContactCard 
		key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		link={robots[i].link}
		source={robots[i].source}
		/>
	})
	return(<div>{cardComponent}</div>);
}
export default ContactCardList;