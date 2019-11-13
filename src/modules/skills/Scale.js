import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	margin-left: 1px;
	border: 1px solid ${props => props.theme.primary};
	background-color: ${props => props.full ? props.theme.primary : 'transparent'};
`;

function Scale(props) {
	const echelle = 10;
	const echelleJSX = [];

	const containerStyle = {
		display: 'flex'
	};

	for (let i = 0 ; i < props.level ; i++) {
		echelleJSX.push(
			<Circle full key={i} />
		);
	}
	for (let i = props.level ; i < echelle ; i++) {
		echelleJSX.push(
			<Circle key={i} />
		);
	}

	return (
		<div style={containerStyle}>{echelleJSX}</div>
	);
}

export default Scale;