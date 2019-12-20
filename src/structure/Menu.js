import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Hidden from '@material-ui/core/Hidden';

String.prototype.sansAccent = function() {
	var accent = [
		/[\300-\306]/g,
		/[\340-\346]/g, // A, a
		/[\310-\313]/g,
		/[\350-\353]/g, // E, e
		/[\314-\317]/g,
		/[\354-\357]/g, // I, i
		/[\322-\330]/g,
		/[\362-\370]/g, // O, o
		/[\331-\334]/g,
		/[\371-\374]/g, // U, u
		/[\321]/g,
		/[\361]/g, // N, n
		/[\307]/g,
		/[\347]/g // C, c
	];
	var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

	var str = this;
	for (var i = 0; i < accent.length; i++) {
		str = str.replace(accent[i], noaccent[i]);
	}

	return str;
};

const MenuItem = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	color: ${props => (props.current ? props.theme.primary : props.theme.black)};
	font-size: 0.9em;
	transition: all 100ms linear;
	margin-left: 12px;

	&:hover {
		color: ${props => props.theme.primary};
	}
`;

const StyledNav = styled.nav`
	align-items: center;
	${props => props.vertical && 'height: 100%;'}
	display: flex;
	& ul {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: ${props => (props.vertical ? 'space-around' : 'space-between')};
		${props =>
			props.vertical &&
			`
			flex-direction: column;
			height: 100%;
			width: 100%;
		`}
	}
`;

function Menu(props) {
	const [activePage, setActivePage] = useState('accueil');
	const correctedYPos = props.yPos + 100;
	const pagesId = [];
	let pagesY;

	useEffect(() => {
		pagesY = pagesId.map(id => {
			return document.getElementById(id).offsetTop + document.getElementById(id).offsetHeight;
		});
		if (correctedYPos < pagesY[0]) {
			setActivePage(pagesId[0]);
		} else if (pagesY[0] <= correctedYPos && correctedYPos < pagesY[1]) {
			setActivePage(pagesId[1]);
		} else if (pagesY[1] <= correctedYPos && correctedYPos < pagesY[2]) {
			setActivePage(pagesId[2]);
		} else if (pagesY[2] <= correctedYPos && correctedYPos < pagesY[3]) {
			setActivePage(pagesId[3]);
		} else if (pagesY[3] <= correctedYPos) {
			setActivePage(pagesId[4]);
		}
	}, [props.yPos]);

	const menuJSX = props.children.map(item => {
		const id = item.props.children.replace(/ /g, '').sansAccent();
		pagesId.push(id);
		return (
			<li key={item.props.children}>
				<MenuItem current={activePage === id} href={`#${id}`}>
					{item.props.children}
				</MenuItem>
			</li>
		);
	});

	return (
		<Hidden smDown={!props.vertical}>
			<StyledNav vertical={props.vertical}>
				<ul>{menuJSX}</ul>
			</StyledNav>
		</Hidden>
	);
}

export default Menu;
