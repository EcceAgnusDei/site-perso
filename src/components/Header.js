import React from 'react';
import Menu from './Menu';
import BurgerButton from './BurgerButton';
import './Header.css';

function Header(props) {
	return (
		<header>
			<div className="container d-flex justify-content-between">
			{props.logo}
				<BurgerButton click={() => props.burgerClick(
					<Menu vertical>
				        <li>accueil</li>
				        <li>à propos</li>
				        <li>compétences</li>
				        <li>portfolio</li>
				        <li>contact</li>
					</Menu>
				)}/>
				<Menu>
			        <li>accueil</li>
			        <li>à propos</li>
			        <li>compétences</li>
			        <li>portfolio</li>
			        <li>contact</li>
				</Menu>
			</div>
      	</header>
	);
}

export default Header