import React from 'react';
import Article from './Article';
import SideDrawer from './SideDrawer';
import FullArticle from './FullArticle';
import './showroom.css'

class Showroom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false,
			articleIndex: 0
		};
	}

	drawerClickHandler = () => {
		this.setState({
			sideDrawerOpen: false,
			articleIndex: 0
		});
	}

	articleClickHandler = (index) => {
		this.setState({
			sideDrawerOpen: true,
			articleIndex: index
		});
	}
	
	render() {
		const articlesJSX = this.props.children.map(item =>
		<Article 
			title={item.title}
			subtitle={item.subtitle}
			img={item.img}
			key={item.title} 
			click={this.articleClickHandler} 
			index={this.props.children.indexOf(item)}
		/>
		);

		const {title, subtitle, text, link, img} = this.props.children[this.state.articleIndex];

		return (
			<React.Fragment>
				<div className="showroom">
					{articlesJSX}
				</div>
				<SideDrawer 
		            open={this.state.sideDrawerOpen} 
		            backdropClick={this.drawerClickHandler}
		        >
		        	<FullArticle 
						title={title}
						subtitle={subtitle}
						text={text}
						link={link}
						img={img}
					/>
		        </SideDrawer>
			</React.Fragment>
		);
	}
}

export default Showroom


