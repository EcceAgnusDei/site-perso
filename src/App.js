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
import background from './background-min.jpg';
import chillingCat from './chillingCat-min.jpg';
import codingMan from './codingMan-min.jpg';
import helloWorld from './helloWorld-min.jpg';
import projectList from './components/libs/projectList';
import Logo from './components/Logo.js';
import './css/App.css';

const CodingMan = lazy(() => import('./components/CodingMan.js'));
const ChillingCat = lazy(() => import('./components/ChillingCat.js'));
const HelloWorld = lazy(() => import('./components/HelloWorld.js'));

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
		    	{!this.isMobileDevice &&
		    		<Suspense fallback={<Overlay height="300px"/>}> 
		    			<HelloWorld />
		    		</Suspense>}
		    	<Skills />
		    	{!this.isMobileDevice && 
		    		<Suspense fallback={<Overlay height="300px"/>}>
		    			<CodingMan />
		    		</Suspense>}
		    	<Portfolio articleClickHandler={this.drawe}>
		    		{projectList}
		    	</Portfolio>
		    	{!this.isMobileDevice &&
		    		<Suspense fallback={<Overlay height="300px"/>}>
		    			<ChillingCat />
		    		</Suspense>}
		    	<Contact />
		    	<Footer />
    		</div>
		);
	}
}

export default App

