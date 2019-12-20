import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

import BurgerButton from 'elements/BurgerButton';
import FlexContainer from 'elements/FlexContainer';

import Menu from './Menu';

const StyledHeader = styled.header`
	min-height: 100px;
	width: 100%;
	//box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	position: fixed; 
	z-index: 500;
	//background-color: ${props => props.theme.light};
	${props =>
		props.yPos > 200
			? `
		background-color: rgba(255, 255, 255, 0.9);
		min-height: 70px;
		box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.5);`
			: ''}
	transition: all 0.5s;
`;

function Header(props) {
	const [yPos, setYPos] = useState(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (Math.abs(yPos - window.scrollY) > 90) setYPos(window.scrollY);
		});
	}, [yPos]);

	return (
		<StyledHeader yPos={yPos}>
			<Container>
				<FlexContainer>
					{props.logo}
					<BurgerButton
						click={() =>
							props.burgerClick(
								<Menu vertical yPos={yPos}>
									<li>accueil</li>
									<li>à propos</li>
									<li>compétences</li>
									<li>portfolio</li>
									<li>contact</li>
								</Menu>,
								'menu'
							)
						}
					/>
					<Menu yPos={yPos}>
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

export default Header;
