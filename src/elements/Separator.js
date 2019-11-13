import React from 'react';
import styled from 'styled-components';

const Separator = styled.div`
	height: 3px;
	width: 50px;
	margin: 7px auto;
	background-color: ${props => props.theme.primary};
`;

export default Separator