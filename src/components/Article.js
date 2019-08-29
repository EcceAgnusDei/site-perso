import React from 'react';
import './Article.css';
import PictureContainer from './PictureContainer';
import Separator from './Separator';

function Article(props) {
	const {title, subtitle, img} = props;

	return (
		<div className="article" onClick={() => props.click(props.index)}>
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