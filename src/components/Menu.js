import React, { useState } from 'react';
import './Menu.css';

String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
     
    return str;
}

function Menu(props) {
	const [activePage, setActivePage] = useState('accueil');
	const menuJSX = props.children.map(item => {
		const id = item.props.children.replace(/ /g, "").sansAccent();
		return (
		<li key={item.props.children}>
			<a 
				className={activePage === id ? "menu-item current ml-4" : "menu-item ml-4"}
				href={`#${id}`}
				onClick={() => setActivePage(id)}
			>
				{item.props.children}
			</a>
		</li>
		)
	})

	if (props.vertical) {
		return (
			<nav className="d-flex justify-content-center h-100">
				<ul className="vertical">
					{menuJSX}
				</ul>
			</nav>
		);
	} else {
		return (
			<nav className="d-none d-md-flex align-items-center">
				<ul className="d-flex justify-content-between m-0">
					{menuJSX}
				</ul>
			</nav>
		);
	}
	
}

export default Menu