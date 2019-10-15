import React from 'react';
import './MainLinks.css'

function MainLinks() {
	return (
		<div className="main_links">
			<a 
				target="_blank" 
				className="main_links-item" 
				href="http://www.linkedin.com/in/antoine-mondoloni-2b176a140"
				rel="noopener noreferrer"
			>
				<i className="fab fa-linkedin-in"></i>
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="https://github.com/EcceAgnusDei"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i>
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="http://mondoloni-dev.fr/CV/"
				rel="noopener noreferrer"
			>
				cv
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="mailto:mondo.antoine@yahoo.fr"
				rel="noopener noreferrer"
			>
				<i className="far fa-envelope"></i>
			</a>
		</div>
	);
}

export default MainLinks