import React from 'react';

import about from 'libs/aboutMe';
import profil from 'assets/img/profil.jpg';
import Title from 'elements/Title2.js'

import './AboutMe.css';


function AboutMe() {
	let count = -1;
	const aboutJSX = about.map(item => {
		count++;
		return <div key={count} className="paragraph-item">{item}</div>
	})
	return (
		<section id="apropos">
			<div className="container">
				<Title>à propos</Title>
				<div className="row">
					<div className="col-12 col-md-3 d-flex flex-column align-items-center">
						<img className="profil_picture" src={profil} alt=""/>
						<a className="btn" target="_blank" href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf" rel="noopener noreferrer">
							Télécharger mon CV
						</a>
					</div>
					<div className="col-12 col-md-9">
						{aboutJSX}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe