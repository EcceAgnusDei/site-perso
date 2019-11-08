import React from 'react';
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"

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
				<FaLinkedinIn />
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="https://github.com/EcceAgnusDei"
				rel="noopener noreferrer"
			>
				<FaGithub />
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf"
				rel="noopener noreferrer"
				className="CV"
			>
				cv
			</a>
			<a 
				target="_blank" 
				className="main_links-item" 
				href="mailto:mondo.antoine@yahoo.fr"
				rel="noopener noreferrer"
			>
				<FaEnvelope />
			</a>
		</div>
	);
}

export default MainLinks