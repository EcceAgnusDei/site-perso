import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import MainLinks from 'elements/MainLinks';
import FlexContainer from 'elements/FlexContainer';
import theme from 'theme';

const StyledFooter = styled.footer`
	color: ${props => props.theme.lightGrey};
	margin-top: 50px;
`;

const FooterTop = styled.div`
	background-color: ${props => props.theme.grey};
	height: 50px;
`;

const FooterBottom = styled.div`
	background-color: ${props => props.theme.darkGrey};
	height: 80px;
	display: flex;
	alignItems: center;

	@media (max-width: ${props => props.theme.sm})
	{
		font-size: 0.9rem;
	}

	& a {
		color: inherit;
	}
`;

function Footer() {
	return (
		<StyledFooter>
			<FooterTop>
				<MainLinks color={theme.lightGrey}/>
			</FooterTop>
			<FooterBottom>
				<Container>
					<FlexContainer>
							<div>&copy;Antoine Mondoloni 2019</div>
							<a 
								href="http://mondoloni-dev.fr/legal/legalNotice.html" 
								target="_blank" 
								rel="noopener noreferrer">Mentions légales
							</a>
					</FlexContainer>
				</Container>
			</FooterBottom>
		</StyledFooter>
	);
}

export default Footer