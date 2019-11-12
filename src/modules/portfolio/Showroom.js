import React from 'react';
import './Showroom.css'

function Showroom(props) {
	return (
		<React.Fragment>
			<div className="row">
				{props.children}
			</div>
		</React.Fragment>
	);
}

export default Showroom


