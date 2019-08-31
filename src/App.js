import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import Menu from './components/Menu';
import projectList from './components/libs/projectList';
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
		    	<Header burgerClick={this.drawe}/>
		    	<Home />
		    	<AboutMe />
		    	<Skills />
		    	<Portfolio articleClickHandler={this.drawe}>
		    		{projectList}
		    	</Portfolio>
		    	<Contact />
		    	<Footer />
    		</div>
		);
	}
}

export default App

