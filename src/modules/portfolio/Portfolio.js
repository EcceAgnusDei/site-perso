import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Title from 'elements/Title2';

import Article from './Article';

function Portfolio(props) {
	const articlesJSX = props.children.map(item =>
		<Grid item xs={10} sm={6} md={4} lg={3} key={item.title}>
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
		</Grid>
		);
	return (
		<section id="portfolio">
			<Container>
				<Title>portfolio</Title>
				<Grid container justify="center" spacing={2}>
					{articlesJSX}
				</Grid>
			</Container>
		</section>
	);
}

export default Portfolio;