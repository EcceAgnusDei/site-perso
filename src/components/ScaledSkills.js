import React from 'react';
import Scale from './Scale';

function ScaledSkills(props) {
	const style = {
		margin: 0
	}
	const langagesJSX = props.children.map(item => 
		<div key={item.nom}>
			<p style={style}>{item.nom}</p>
			<Scale level={item.niveau} color='turquoise'/>
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