import React, { Component, lazy, Suspense } from 'react';
import { Parallax } from 'react-parallax';

import Header from 'structure/Header';
import Home from 'modules/home/Home';
import AboutMe from 'modules/about/AboutMe';
import Skills from 'modules/skills/Skills';
import Portfolio from 'modules/portfolio/Portfolio';
import Contact from 'modules/contact/Contact';
import Footer from 'structure/Footer';
import SideDrawer from 'elements/SideDrawer';
import Overlay from 'elements/Overlay';
import ProgressiveParallax from 'elements/ProgressiveParallax';
import background from 'assets/img/background-min.jpg';
import cat from 'assets/img/chillingCat-min.jpg';
import catMicro from 'assets/img/chillingCat-micro.jpg';
import codingMan from 'assets/img/codingMan-min.jpg';
import codingManMicro from 'assets/img/codingMan-micro.jpg';
import helloWorld from 'assets/img/helloWorld-min.jpg';
import helloWorldMicro from 'assets/img/helloWorld-micro.jpg';
import projectList from 'libs/projectList';
import Logo from 'structure/Logo.js';
import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false,
			drawerContent: null
		};
		this.isMobileDevice = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	}

	drawerClickHandler = () => {
		this.setState({
			sideDrawerOpen: false,
			drawerContent: null
		});
	}

	drawe = (content) => {
		console.log('burgerclick')
		this.setState({
			sideDrawerOpen: true,
			drawerContent: content
		});
	}
	
	render() {
		return (
			<div className="App">
				<SideDrawer 
					open={this.state.sideDrawerOpen} 
					backdropClick={this.drawerClickHandler}
				>
				{this.state.drawerContent}
				</SideDrawer>
		    	<Header 
			    	burgerClick={this.drawe} 
			    	logo={<Logo />}
		    	/>
		    	<Parallax
		    		bgImage={background}
		    		strength={200}
		    	>
		    		<Home/>
		    	</Parallax>
		    	<AboutMe />
	    		<ProgressiveParallax
		    		src={helloWorld}
		    		placeHolder={helloWorldMicro}
		    		height={300}
		    		overlay
	    		/>
		    	<Skills />
	    		<ProgressiveParallax
		    		src={codingMan}
		    		placeHolder={codingManMicro}
		    		height={300}
		    		overlay
	    		/>
		    	<Portfolio articleClickHandler={this.drawe}>
		    		{projectList}
		    	</Portfolio>
	    		<ProgressiveParallax
		    		src={cat}
		    		placeHolder={catMicro}
		    		height={300}
		    		overlay
	    		/>
		    	<Contact />
		    	<Footer />
    		</div>
		);
	}
}

export default App

