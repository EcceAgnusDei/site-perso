import React, { Component } from 'react';
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
import background from './background-min.jpg';
import chillingCat from './chillingCat-min.jpg';
import codingMan from './codingMan-min.jpg';
import helloWorld from './helloWorld-min.jpg';
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
		    	<Interlude img={helloWorld}/>
		    	<Skills />
		    	<Interlude img={codingMan}/>
		    	<Portfolio articleClickHandler={this.drawe}>
		    		{projectList}
		    	</Portfolio>
		    	<Interlude img={chillingCat}/>
		    	<Contact />
		    	<Footer />
    		</div>
		);
	}
}

export default App

