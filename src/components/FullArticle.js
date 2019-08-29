import React from 'react';
import './FullArticle.css';
import PictureContainer from './PictureContainer';

function FullArticle(props) {
	const {title, subtitle, text, link, img} = props;

	const linkHandler = (event) => {
		event.preventDefault();
		window.open(link);
	}

	const style = {
		backgroundImage: `url(${img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center top'
	}

	return (
		<div className="full_article container">
			<div className="title">{title} - {subtitle}</div>
			<div className="paragraph">{text}</div>
			{img &&
			<PictureContainer width='100%' height='70%' url={img}/>}
			{link.length > 0 && 
			<a href={link} className="btn" onClick={linkHandler}>Voir</a>}		
		</div>
	);
}

export default FullArticle