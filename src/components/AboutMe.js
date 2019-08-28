import React from 'react';
import about from './libs/aboutMe';
import profil from '../profil.jpg';
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
				<h2>à propos</h2>
				<div className="body">
					<div className="aside">
						<img className="profil_picture" src={profil}/>
						<a className="btn" href="http://mondoloni-dev.fr/CV_antoine_mondoloni.pdf">
							Télécharger mon CV
						</a>
					</div>
					<div className="paragraph">
						{aboutJSX}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe