import React from 'react';
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
	const menuJSX = props.children.map(item => 
		<li key={item.props.children}>
			<a 
				className="menu-item" 
				href={`#${item.props.children.replace(/ /g, "").sansAccent()}`}
			>
				{item.props.children}
			</a>
		</li>
	)
	return (
		<ul className={props.vertical ? "menu vertical" : "menu"}>
			{menuJSX}
		</ul>
	);
}

export default Menu