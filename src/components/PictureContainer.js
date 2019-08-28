import React from 'react';

function PictureContainer(props) {
	const width = props.width ? props.width : '100%';
	const height = props.height ? props.height : '100%';
	
	const style = {
		width: width,
		height: height,
		backgroundImage: `url(${props.url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center top'
	};

	return (
		<div style={style}>
			{props.children}
		</div>
	);
}

export default PictureContainer;