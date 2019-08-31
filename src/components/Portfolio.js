import React from 'react';
import Showroom from './Showroom';
import Article from './Article';


function Portfolio(props) {
	const articlesJSX = props.children.map(item =>
		<Article 
			title={item.title}
			subtitle={item.subtitle}
			img={item.img}
			text={item.text}
			link={item.link}
			key={item.title} 
			click={props.articleClickHandler}
		/>
		);
	return (
		<section id="portfolio">
			<div className="container">
				<h2>portfolio</h2>
				<Showroom>
					{articlesJSX}
				</Showroom>
			</div>
		</section>
	);
}

export default Portfolio