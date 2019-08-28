import React from 'react';
import Menu from './Menu';
import './Header.css';

function Header(props) {
	return (
		<header>
			<div className="container">
			{props.logo &&
				<img src={props.logo} className="logo"/>}
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