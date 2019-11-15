import React from 'react';
import {FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 230px; 
	text-transform: uppercase;
	font-size: 1.7em;
	
	& a {
		color: ${props => props.color} !important;
	}

	& a:hover {
		transform: scale(1.1);
		transition: all 100ms linear;
		color: ${props => props.color} !important;
	}
`;

function MainLinks(props) {
	return (
		<StyledDiv color={props.color}>
			<a 
				target="_blank"
				href="http://www.linkedin.com/in/antoine-mondoloni-2b176a140"
				rel="noopener noreferrer"
			>
				<FaLinkedinIn />
			</a>
			<a 
				target="_blank"
				href="https://github.com/EcceAgnusDei"
				rel="noopener noreferrer"
			>
				<FaGithub />
			</a>
			<a 
				target="_blank"
				href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf"
				rel="noopener noreferrer"
				style={{paddingTop: 5}}
			>
				cv
			</a>
			<a 
				target="_blank"
				href="mailto:mondo.antoine@yahoo.fr"
				rel="noopener noreferrer"
			>
				<FaEnvelope />
			</a>
		</StyledDiv>
	);
}

export default MainLinks