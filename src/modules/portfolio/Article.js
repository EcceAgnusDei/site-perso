import React from 'react';

import PictureContainer from 'elements/PictureContainer';
import Separator from 'elements/Separator';

import FullArticle from './FullArticle';
import './Article.css';

function Article(props) {
	const {title, subtitle, img, text, link, imgMin, github} = props;

	return (
		<div className="article" onClick={() => props.click(
			<FullArticle 
				title={title}
				subtitle={subtitle}
				text={text}
				link={link}
				github={github}
				img={img}
			/>
		)}>
			<PictureContainer url={imgMin}>
				<div className="content">
					<div className="title">
						{title}
					</div>
					<Separator />
					<div className="subtitle">
						{subtitle}
					</div>
				</div>
			</PictureContainer>
		</div>
	);
}

export default Article