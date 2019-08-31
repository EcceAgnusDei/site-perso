import React from 'react';
import './ParallaxContainer.css';

function ParallaxContainer(props) {
	const style = {
		backgroundImage: `url(${props.img})`,
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	};
	return (
		<div className="parallax" style={style}>
			{props.children}
		</div>
	);
}

export default ParallaxContainer