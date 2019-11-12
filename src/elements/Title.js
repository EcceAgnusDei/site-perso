import React from 'react';
import Separator from 'elements/Separator';
import './Title.css';

function Title() {
	return (
		<div className="title-container">
			<div className="name">Antoine Mondoloni</div>
			<Separator />
			<h1 className="title">développeur web front-end react.js</h1>
		</div>
	);
}

export default Title;