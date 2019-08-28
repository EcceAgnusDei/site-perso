import React from 'react';

function Article(props) {

	return (
		<div>
			<img src={props.item.img} />
			<div className="title">
				{props.item.title}
			</div>
			<div className="subtitle">
				{props.item.subtitle}
			</div>
		</div>
	);
}

export default Article