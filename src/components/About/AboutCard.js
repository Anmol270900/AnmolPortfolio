import React from 'react';

const AboutCard= (props) =>{
	return(
		<div className='ma3 pa4 br3 grow f4 link ph3 pv2 dib white wall shadow-5 ba b--white tc'>
			<img alt='about' src={require(`${props.imagesource}`)} width="250" height="150"/> 
			<div>
				<h2>{props.name}</h2>
				<p>{props.text}</p>
				<p>{props.textt}</p>
			</div>
		</div>
		);
}

export default AboutCard;