import React from 'react';
import ShowRoom from './ShowRoom';
import projectList from './libs/projectList';

function Portfolio() {
	return (
		<section id="portfolio">
			<h2>Portfolio</h2>
			<ShowRoom>
				{projectList}
			</ShowRoom>

		</section>
	);
}

export default Portfolio