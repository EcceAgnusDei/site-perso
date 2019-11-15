import React from 'react';
import styled from 'styled-components';

import Scale from './Scale';

const StyledDiv = styled.div`
	min-height: 500px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const StyledParagraph = styled.p`
	margin: 0;
	text-align: center;
	@media (min-width: ${props => props.theme.md}) {
		text-align: left;
	}
`;

const LanguagesContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (min-width: ${props => props.theme.md}) {
		align-items: start;
	}
`;

const Language = styled.div`
	margin-bottom: 12px;
`;

function ScaledSkills(props) {
	const langagesJSX = props.children.map((item, index) => 
		<Language key={index}>
			<StyledParagraph>{item.nom}</StyledParagraph>
			<Scale level={item.niveau} />
		</Language>
	)
	return (
		<StyledDiv>
			<h3>{props.title}</h3>
			<LanguagesContainer>
				{langagesJSX}
			</LanguagesContainer>
		</StyledDiv>
	);
}

export default ScaledSkills