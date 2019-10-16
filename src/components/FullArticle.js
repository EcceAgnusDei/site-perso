import React from 'react';
import './FullArticle.css';
import PictureContainer from './PictureContainer';

function FullArticle(props) {
	const {title, subtitle, text, link, img, github} = props;

	// const linkHandler = (event) => {
	// 	event.preventDefault();
	// 	window.open(link);
	// }

	// const style = {
	// 	backgroundImage: `url(${img})`,
	// 	backgroundSize: 'cover',
	// 	backgroundPosition: 'center top'
	// }

	return (
		<div className="full_article container">
			<div className="title">{title} - {subtitle}</div>
			<div className="paragraph">{text}</div>
			{img &&
			<PictureContainer width='100%' height='70%' url={img}/>}
			<div className="btn-wrapper">
				{link.length > 0 && 
				<a href={link} className="btn" target="_blank" rel="noopener noreferrer">Le site</a>}
				{github &&
				<a href={github} className="btn" target="_blank" rel="noopener noreferrer">Le code</a>}
			</div>		
		</div>
	);
}

export default FullArticle