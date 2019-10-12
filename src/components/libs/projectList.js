import projet1 from './projectImg/projet1.jpg';
import projet2 from './projectImg/projet2.jpg';
import projet3 from './projectImg/projet3.jpg';
import projet4 from './projectImg/projet4.jpg';
import projetPerso from './projectImg/projet_perso.jpg';
import projetPersoReact from './projectImg/projet_perso_react.jpg';
import blogStrap from './projectImg/blogStrap.jpg';
import projet1Min from './projectImg/projet1.min.jpg';
import projet2Min from './projectImg/projet2.min.jpg';
import projet3Min from './projectImg/projet3.min.jpg';
import projet4Min from './projectImg/projet4.min.jpg';
import projetPersoMin from './projectImg/projet_perso.min.jpg';
import projetPersoReactMin from './projectImg/projet_perso_react.min.jpg';
import blogStrapMin from './projectImg/blogStrap.min.jpg';
import React from 'react'

const list = [
	{
		title: 'Projet 1',
		subtitle: `OpenClassRoom`,
		text: <React.Fragment>
			<p>Le sujet: intégration d'une maquette imposée. Le projet présenté ici a été modifié pour n'employer que des classes bootstrap.</p>
				<ul>Technologies employées:
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Bootstrap</li>
				</ul>
		</React.Fragment>,
		link: 'https://mondoloni-dev.fr/webagency/',
		img: projet1,
		imgMin: projet1Min,
		github: 'https://github.com/EcceAgnusDei/OCR-Projet1-Bootstrap'
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
		link: 'https://mondoloni-dev.fr/villedenoumea/',
		img: projet2,
		imgMin: projet2Min,
		github: ''
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
		link: 'https://mondoloni-dev.fr/velov/',
		img: projet3,
		imgMin: projet3Min,
		github: 'https://github.com/EcceAgnusDei/Projet-3-OCR'
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
		link: 'https://mondoloni-dev.fr/billetsimple/',
		img: projet4,
		imgMin: projet4Min,
		github: 'https://github.com/EcceAgnusDei/Projet-4'
	},
	{
		title: 'Jeu de la vie',
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
		link: 'https://mondoloni-dev.fr/automate-cellulaire/',
		img: projetPerso,
		imgMin: projetPersoMin,
		github: 'https://github.com/EcceAgnusDei/automate-cellulaire'
	},
	{
		title: 'Jeu de la vie - React',
		subtitle: `Personnel`,
		text: <React.Fragment>
			<p>Refactorisation complète du dernier projet de la formation OpenClassRoom. La partie
			client est désormais développée en react (functional components uniquement), les Api sont codées en PHP.</p>
				<ul>Technologies employées:
					<li>React.js (hooks)</li>
					<li>PHP</li>
					<li>SQL</li>
				</ul>
		</React.Fragment>,
		link: 'https://jeu-de-la-vie.mondoloni-dev.fr/',
		img: projetPersoReact,
		imgMin: projetPersoReactMin,
		github: 'https://github.com/EcceAgnusDei/jeu-de-la-vie'
	},
	{
		title: 'BlogStrap',
		subtitle: `Personnel`,
		text: <React.Fragment>
			<p>Création from scratch d'un faut blog dont le contenu provient de l'API jsonPlaceholder. Ce site m'a permis de me familiariser 
			avec bootstrap.</p>
				<ul>Technologies employées:
					<li>React.js (hooks)</li>
					<li>Redux</li>
					<li>Bootstrap</li>
				</ul>
		</React.Fragment>,
		link: 'https://blogstrap.mondoloni-dev.fr/',
		img: blogStrap,
		imgMin: blogStrapMin,
		github: 'https://github.com/EcceAgnusDei/BlogStrap'
	},
];

export default list;

