import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import about from 'libs/aboutMe';
import profil from 'assets/img/profil.jpg';
import Title from 'elements/Title2.js';
import Button from 'elements/Button';

const StyledImg = styled.img`
	width: 150px;
	border-radius: 50%;
	box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, 0.5);
`;

const StyledAnchors = styled.div`
	& a {
		color: ${props => props.theme.primary}
	}
`;

function AboutMe() {
	const aboutJSX = about.map((item, index) => {
		return <div key={index}>{item}</div>
	})
	return (
		<section id="apropos">
			<Container>
				<Title>à propos</Title>
				<Grid container spacing={1}>
					<Grid 
						container
						item
						direction="column" 
						alignItems="center"
						xs={12}
						md={4}
						lg={3}
					>
						<StyledImg src={profil} alt=""/>
						<a 
							target="_blank" 
							href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf" 
							rel="noopener noreferrer"
						>
							<Button>
								Télécharger mon CV
							</Button>
						</a>
					</Grid>
					<Grid item xs={12} md={8} lg={9}>
						<StyledAnchors>
							{aboutJSX}
						</StyledAnchors>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}

export default AboutMe