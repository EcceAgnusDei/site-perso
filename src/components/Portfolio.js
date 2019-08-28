import React from 'react';
import Showroom from './Showroom';
import projectList from './libs/projectList';

function Portfolio() {
	return (
		<section id="portfolio">
			<div className="container">
				<h2>portfolio</h2>
				<Showroom>
					{projectList}
				</Showroom>
			</div>
		</section>
	);
}

export default Portfolio