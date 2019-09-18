import React from 'react';
import MainLinks from './MainLinks'
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div className="footer-top">
				<div className="container">
					<MainLinks />
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div>&copy;Antoine Mondoloni 2019</div>
					<a href="http://mondoloni-dev.fr/legal/legalNotice.html" target="_blank" rel="noopener noreferrer">Mentions légales</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer