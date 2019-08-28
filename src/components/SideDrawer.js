import React from 'react';
import './sideDrawer.css';

function SideDrawer(props) {
	let className = 'backdrop';

	if(props.open)
	{
		className = 'backdrop open'
	}
	return (
		<div className={className} onClick={props.backdropClick}>
			<div className="side_drawer">
				{props.children}
			</div>
		</div>
	);
}

export default SideDrawer;