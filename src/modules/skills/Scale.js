import React from 'react'

function Scale(props) {
	const echelle = 10;
	const echelleJSX = [];
	const color = props.color;

	const circleStyle = {
		width: 15,
		height: 15,
		borderRadius: '50%',
		marginLeft: '1px',
		border: `1px solid ${color}`
	};
	const containerStyle = {
		display: 'flex'
	};


	for (let i = 0 ; i < props.level ; i++) {
		const style = {};
		Object.assign(style, circleStyle);

		echelleJSX.push(
			<div style={{...circleStyle, backgroundColor: color}} key={i}></div>
		);
	}
	for (let i = props.level ; i < echelle ; i++) {
		echelleJSX.push(
			<div style={circleStyle} key={i}></div>
		);
	}

	return (
		<div className="scale" style={containerStyle}>{echelleJSX}</div>
	);
}

export default Scale