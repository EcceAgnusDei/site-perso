import React from 'react';
import Title from 'elements/Title';
import MainLinks from 'elements/MainLinks';
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