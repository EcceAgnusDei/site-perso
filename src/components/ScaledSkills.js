import React from 'react';
import Scale from './Scale';

function ScaledSkills(props) {
	const style = {
		margin: 0,
		textAlign: 'left'
	}
	const langagesJSX = props.children.map(item => 
		<div key={item.nom}>
			<p style={style}>{item.nom}</p>
			<Scale level={item.niveau} color='#38afbc'/>
		</div>
	)
	return (
		<div className="technical_skills">
			<h3>{props.title}</h3>
			<div className="body">{langagesJSX}</div>
		</div>
	);
}

export default ScaledSkills