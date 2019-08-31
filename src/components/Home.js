import React from 'react';
import Title from './Title';
import MainLinks from './MainLinks';
import './Home.css';

function Home() {
	return (
		<section id="accueil">
			<div className="container">
				<Title />
				<MainLinks />
			</div>	
		</section>
	);
}

export default Home