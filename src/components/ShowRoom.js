import React from 'react';
import Article from './Article';
import SideDrawer from './SideDrawer';
import FullArticle from './FullArticle';
import './Showroom.css'

function Showroom(props) {
	return (
		<React.Fragment>
			<div className="showroom">
				{props.children}
			</div>
		</React.Fragment>
	);
}

export default Showroom


