import React from 'react';

function PictureContainer({ width, height, url, children, shadow, mH}) {
	
	const style = {
		width: width,
		height: height,
		minHeight: mH,
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center top',
		boxShadow: shadow ? '0px 2px 9px 0px rgba(0, 0, 0, 0.5)' : 'none',
		flex: 1
	};

	return (
		<div style={style}>
			{children}
		</div>
	);
}

PictureContainer.defaultProps = {
	width: 'auto',
	height: 'auto',
	mH: '0px'
}

export default PictureContainer;