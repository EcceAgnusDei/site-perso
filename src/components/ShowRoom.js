import React from 'react';
import Article from './Article';

function ShowRoom(props) {
	const articlesJSX = props.children.map(item =>
		<Article item={item} key={item.title}/>
	);
	return (
		<div>
			{articlesJSX}
		</div>
	);
}

export default ShowRoom