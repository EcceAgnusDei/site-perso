import React from 'react';

import Title from 'elements/Title2';

import Showroom from './Showroom';
import Article from './Article';

function Portfolio(props) {
	const articlesJSX = props.children.map(item =>
		<div className="offset-2 offset-sm-0 col-8 col-sm-6 col-md-4 col-lg-3" key={item.title}>
			<Article 
				title={item.title}
				subtitle={item.subtitle}
				img={item.img}
				imgMin={item.imgMin}
				text={item.text}
				link={item.link}
				github={item.github}
				key={item.title} 
				click={props.articleClickHandler}
			/>
		</div>
		);
	return (
		<section id="portfolio">
			<div className="container">
				<Title>portfolio</Title>
				<Showroom>
					{articlesJSX}
				</Showroom>
			</div>
		</section>
	);
}

export default Portfolio