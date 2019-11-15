import React from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

const StyledButton = styled.div`
	display: flex;
	background-color: transparent;
	height: 48px;
	width: 64px;
	padding: 0;
	flex-direction: column;
	justify-content: space-between;
	border: none;
`;

const StyledDiv = styled.div`
	height: 3px;
	width: 100%;
	background-color: ${props => props.theme.primary};
`;

function BurgerButton(props) {
	return (
		<Hidden mdUp>
			<StyledButton onClick={props.click}>
				<StyledDiv />
				<StyledDiv />
				<StyledDiv />
			</StyledButton>
		</Hidden>
	);
}

export default BurgerButton