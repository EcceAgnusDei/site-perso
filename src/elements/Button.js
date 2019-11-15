import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${props => props.theme.primary};
	padding: 3px 7px;
	background-color: transparent;
	border-radius: 2px;
	border: 2px ${props => props.theme.primary} solid;
	margin: 12px 0;
	transition: all 200ms linear;
	font-size: 1em;
	font-family: inherit;
	white-space: nowrap;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.primary};
		color: white;
	}
`;

const Button = ({ children, onClick }) => (
	<StyledButton onClick={onClick}>
		{children}
	</StyledButton>
)

export default Button;