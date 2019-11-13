import React from 'react';
import styled from 'styled-components';

const Underline = styled.div`
	height: 3px;
	width: 50px;
	margin-bottom: 24px;
	background-color: ${props => props.theme.primary};
`;

function Title2(props) {
	const headerStyle = {
		marginBottom: 0
	}

	return (
		<React.Fragment>
			<h2 style={headerStyle}>{props.children}</h2>
			<Underline />
		</React.Fragment>
	);
}

export default Title2