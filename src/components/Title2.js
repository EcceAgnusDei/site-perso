import React from 'react'

function Title2(props) {
	const headerStyle = {
		marginBottom: 0
	}

	const underline = {
		height: 3,
		width: 50,
		marginBottom: 24
	}
	return (
		<React.Fragment>
			<h2 style={headerStyle}>{props.children}</h2>
			<div style={underline} className="title-underline"/>
		</React.Fragment>
	);
}

export default Title2