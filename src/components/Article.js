import React from 'react';
import './Article.css';
import PictureContainer from './PictureContainer';

function Article(props) {
	const {title, subtitle, img} = props;

	return (
		<div className="article" onClick={() => props.click(props.index)}>
			<PictureContainer url={img}>
				<div className="content">
					<div className="title">
						{title}
					</div>
					<div className="separator" />
					<div className="subtitle">
						{subtitle}
					</div>
				</div>
			</PictureContainer>
		</div>
	);
}

export default Article