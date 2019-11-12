import React from 'react'

function Overlay(props) {
	return (
		<div
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.3)',
				height: props.height,
				width: '100%'
			}}
		>
			{props.children}
		</div>
	);
}

export default Overlay