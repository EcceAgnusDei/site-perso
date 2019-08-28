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
		<div className="full_article">
			<div className="full_article-title">{title} - {subtitle}</div>
			<div className="full_article-content">{text}</div>
			{img &&
			<PictureContainer width='75%' height='100%' url={img}/>}
			{link.length > 0 && 
			<a href={link} onClick={linkHandler}>Voir</a>}		
		</div>
	);
}

export default FullArticle