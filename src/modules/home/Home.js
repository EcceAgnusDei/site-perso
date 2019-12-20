import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import MainLinks from 'elements/MainLinks';
import Separator from 'elements/Separator';
import theme from 'theme';

const StyledSection = styled.section`
	text-align: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 0;
	background: linear-gradient(#FFFFFFFF,#FFFFFF77 80%,#FFFFFF77);
`;

const TitleContainer = styled.div`
	color: $black;
`;

const Name = styled.div`
	font-size: 1.5em;
`;

const Title = styled.h1`
	margin-top: 0; 
  	font-size: 2.3em;
`;

function Home() {
	return (
		<StyledSection id="accueil">
			<Container>
				<TitleContainer>
					<Name>Antoine Mondoloni</Name>
					<Separator />
					<Title>développeur web front-end react.js</Title>
				</TitleContainer>
				<MainLinks color={theme.primary} />
			</Container>	
		</StyledSection>
	);
}

export default Home