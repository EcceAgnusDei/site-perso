import React from 'react';
import styled from 'styled-components';

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
	background-color: rgba(255, 255, 255, 0.7);
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
			<div className="container">
				<TitleContainer>
					<Name>Antoine Mondoloni</Name>
					<Separator />
					<Title>développeur web front-end react.js</Title>
				</TitleContainer>
				<MainLinks color={theme.primary} />
			</div>	
		</StyledSection>
	);
}

export default Home