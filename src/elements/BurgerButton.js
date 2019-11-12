import React from 'react'

function BurgerButton(props) {
	const btnStyle = {
		backgroundColor: 'transparent',
		height: 48,
		width: 64,
		padding: 0,
		flexDirection: 'column',
		justifyContent: 'space-between',
		border: 'none'
	}
	const barStyle = {
		height: 3,
		width: btnStyle.width
	}
	return (
		<button className="d-flex d-md-none" onClick={props.click} style={btnStyle}>
			<div className="burger-bar" style={barStyle}/>
			<div className="burger-bar" style={barStyle}/>
			<div className="burger-bar" style={barStyle}/>
		</button>
	);
}

export default BurgerButton