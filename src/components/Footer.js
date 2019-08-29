import React from 'react';
import MainLinks from './MainLinks'

function Footer() {
	return (
		<footer>
			<MainLinks />
			<div className="footer-legal">
				<div>&copy;Antoine Mondoloni 2019</div>
				<a href="http://mondoloni-dev.fr/legal/legalNotice.html">mentions légales</a>
			</div>
		</footer>
	);
}

export default Footer