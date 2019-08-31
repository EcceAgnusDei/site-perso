import React from 'react';
import './Article.css';
import PictureContainer from './PictureContainer';
import FullArticle from './FullArticle';
import Separator from './Separator';

function Article(props) {
	const {title, subtitle, img, text, link} = props;

	return (
		<div className="article" onClick={() => props.click(
			<FullArticle 
				title={title}
				subtitle={subtitle}
				text={text}
				link={link}
				img={img}
			/>
		)}>
			<PictureContainer url={img}>
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