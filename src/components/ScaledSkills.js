import React from 'react';
import Scale from './Scale';

function ScaledSkills(props) {
	const langagesJSX = props.children.map(item => 
		<div key={item.nom}>
			<p className="m-0 text-center text-md-left">{item.nom}</p>
			<Scale level={item.niveau} color='#38afbc'/>
		</div>
	)
	return (
		<div className="technical_skills col-12 col-md-4">
			<h3>{props.title}</h3>
			<div className="flex-fill d-flex flex-column align-items-center align-items-md-start justify-content-between">{langagesJSX}</div>
		</div>
	);
}

export default ScaledSkills