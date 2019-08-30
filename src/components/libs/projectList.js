import projet1 from './projectImg/projet1.png';
import projet2 from './projectImg/projet2.png';
import projet3 from './projectImg/projet3.png';
import projet4 from './projectImg/projet4.png';
import projetPerso from './projectImg/projet_perso.png';
import React from 'react'

const list = [
	{
		title: 'Projet 1',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Le sujet: intégration d'une maquette imposée.</p>
				<ul>Technologies employées:
					<li>HTML5</li>
					<li>CSS3</li>
				</ul>
		</React.Fragment>,
		link: 'http://mondoloni-dev.fr/webagency/',
		img: projet1
	},
	{
		title: 'Projet 2',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Le sujet: création d'un site WordPress pour le compte de l'office
			du tourisme de Nouméa. Contraintes: implémenter une animation en CSS pur et
			optimisation pour le SEO.</p>
				<ul>Technologies employées:
					<li>WordPress</li>
					<li>CSS3</li>
				</ul>
		</React.Fragment>,
		link: 'http://mondoloni-dev.fr/villedenoumea/',
		img: projet2
	},
	{
		title: 'Projet 3',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Le sujet: création d'une application permettant à l'utilisateur de 
			réserver un vélo par le biais d'une carte interactive. La programmation
			doit se faire en orienté objet.</p>
				<ul>Technologies employées:
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Javascript</li>
					<li>Leaflet</li>
				</ul>
		</React.Fragment>,
		link: 'http://mondoloni-dev.fr/velov/',
		img: projet3
	},
	{
		title: 'Projet 4',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Le sujet: création d'un blog CRUD pour un écrivain avec gestion de base de données.
			L'architecture MVC est imposée et l'emploi de framework interdit</p>
				<ul>Technologies employées:
					<li>PHP</li>
					<li>SQL</li>
				</ul>
		</React.Fragment>,
		link: 'http://mondoloni-dev.fr/billetsimple/',
		img: projet4
	},
	{
		title: 'Projet Personnel',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Dernier projet de la formation OpenClassRoom: figure libre. Le site que j'ai développé
			est une application permettant de jouer au jeu de la vie de John Conway, avec la possibilité
			d'enregistrer ses créations, de les publier, de les commenter, de les liker...</p>
				<ul>Technologies employées:
					<li>PHP</li>
					<li>SQL</li>
					<li>Javascript</li>
				</ul>
		</React.Fragment>,
		link: 'http://mondoloni-dev.fr/automate-cellulaire/',
		img: projetPerso
	}
];

export default list;

