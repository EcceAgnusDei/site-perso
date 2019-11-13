import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
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
		<StyledButton className="d-flex d-md-none" onClick={props.click}>
			<StyledDiv />
			<StyledDiv />
			<StyledDiv />
		</StyledButton>
	);
}

export default BurgerButton