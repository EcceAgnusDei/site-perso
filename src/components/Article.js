import React from 'react';
import './Article.css';
import PictureContainer from './PictureContainer';
import FullArticle from './FullArticle';
import Separator from './Separator';

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