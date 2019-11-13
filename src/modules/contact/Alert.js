import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 700;
`;

const AlertContent = styled.div`
	width: 40%;
	min-width: 300px;
	height: 300px;
	background-color: white;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Alert({ click, children }) {
	return (
		<AlertContainer onClick={click}>
			<AlertContent>
				<p>{children}</p>
			</AlertContent>
		</AlertContainer>
	);
}

export default Alert