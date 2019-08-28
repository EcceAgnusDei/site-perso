import React from 'react'

function GlobalSkills(props) {
	const globalSkillsJSX = props.children.map(item =>
		<div className="globalSkills-item" key={item.titre}>
			<strong>{item.titre}</strong>
			<br/>
			<em>{item.text}</em>
		</div>
	)
	return (
		<div className="globalSkills-container">
			<h3>{props.title}</h3>
			{globalSkillsJSX}
		</div>
	);
}

export default GlobalSkills