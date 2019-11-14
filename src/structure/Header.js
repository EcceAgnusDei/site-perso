import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import BurgerButton from 'elements/BurgerButton';
import FlexContainer from 'elements/FlexContainer';

import Menu from './Menu';

const StyledHeader = styled.header`
	min-height: 70px;
	width: 100%;
	box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	position: fixed; 
	z-index: 500;
	background-color: ${props => props.theme.light};
`;

function Header(props) {
	return (
		<StyledHeader>
			<Container>
				<FlexContainer>
				{props.logo}
					<BurgerButton click={() => props.burgerClick(
						(<Menu vertical>
					        <li>accueil</li>
					        <li>à propos</li>
					        <li>compétences</li>
					        <li>portfolio</li>
					        <li>contact</li>
						</Menu>), 'menu'
					)}/>
					<Menu>
				        <li>accueil</li>
				        <li>à propos</li>
				        <li>compétences</li>
				        <li>portfolio</li>
				        <li>contact</li>
					</Menu>
				</FlexContainer>
			</Container>
      	</StyledHeader>
	);
}

export default Header