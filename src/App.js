import React, { Component, lazy, Suspense } from 'react';
import { Parallax } from 'react-parallax';

import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Interlude from './components/Interlude';
import SideDrawer from './components/SideDrawer';
import Overlay from './components/Overlay';
import ProgressiveParallax from './components/ProgressiveParallax';
import background from './assets/img/background-min.jpg';
import cat from './assets/img/chillingCat-min.jpg';
import catMicro from './assets/img/chillingCat-micro.jpg';
import codingMan from './assets/img/codingMan-min.jpg';
import codingManMicro from './assets/img/codingMan-micro.jpg';
import helloWorld from './assets/img/helloWorld-min.jpg';
import helloWorldMicro from './assets/img/helloWorld-micro.jpg';
import projectList from './components/libs/projectList';
import Logo from './components/Logo.js';
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
		    	<Overlay>
		    		<ProgressiveParallax
			    		src={codingMan}
			    		placeHolder={codingManMicro}
			    		height={300}
			    		overlay
		    		/>
		    	</Overlay>
		    	<Portfolio articleClickHandler={this.drawe}>
		    		{projectList}
		    	</Portfolio>
		    	<Overlay>
		    		<ProgressiveParallax
			    		src={cat}
			    		placeHolder={catMicro}
			    		height={300}
			    		overlay
		    		/>
		    	</Overlay>
		    	<Contact />
		    	<Footer />
    		</div>
		);
	}
}

export default App

