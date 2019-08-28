import React from 'react';
import Scale from './Scale';

function ScaledSkills(props) {
	const langagesJSX = props.children.map(item => 
		<div key={item.nom}>
			<p>{item.nom}</p>
			<Scale level={item.niveau} color='turquoise'/>
		</div>
	)
	return (
		<div className="technical_skills">
			<h3>{props.title}</h3>
			{langagesJSX}
		</div>
	);
}

export default ScaledSkills