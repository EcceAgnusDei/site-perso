import React from 'react';
import styled from 'styled-components';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledDiv = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 230px;
	text-transform: uppercase;
	font-size: 1.7em;
	border-radius: 3px;
	${props => props.background && 'background-color:' + props.background + ';'}

	& a {
		color: ${props => props.color} !important;
	}

	& a:hover {
		transform: scale(1.1);
		transition: all 100ms linear;
		color: ${props => props.color} !important;
	}
`;

function MainLinks({ color, background }) {
	return (
		<StyledDiv color={color} background={background}>
			<a target="_blank" href="http://www.linkedin.com/in/antoine-mondoloni-2b176a140" rel="noopener noreferrer">
				<LinkedInIcon fontSize="large" />
			</a>
			<a target="_blank" href="https://github.com/EcceAgnusDei" rel="noopener noreferrer">
				<GitHubIcon style={{ fontSize: 30 }} />
			</a>
			<a
				target="_blank"
				href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf"
				rel="noopener noreferrer"
				style={{ paddingTop: 5 }}
			>
				cv
			</a>
			<a target="_blank" href="mailto:mondo.antoine@yahoo.fr" rel="noopener noreferrer">
				<EmailIcon fontSize="large" />
			</a>
		</StyledDiv>
	);
}

export default MainLinks;
