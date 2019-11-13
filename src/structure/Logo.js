import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	font-family: 'Cormorant Garamond', serif;
	font-size: 32px;
	a
	{
		color: ${props => props.theme.black};
	}
`;

function Logo() {
	return (
		<StyledDiv>
			<a href="/">M.Dev</a>
		</StyledDiv>
	);
}

export default Logo;