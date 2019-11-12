import React from 'react';

import './Alert.css';

function Alert(props) {
	return (
		<div className="alert-container" onClick={props.click}>
			<div className="alert-content">
				<p>{props.children}</p>
			</div>
		</div>
	);
}

export default Alert