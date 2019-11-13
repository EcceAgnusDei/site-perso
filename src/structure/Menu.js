import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

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

const MenuItem = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	color: ${props => props.current ? props.theme.primary : props.theme.black};
	font-size: 0.9em;
  	transition: all 100ms linear;
  	margin-left: 12px;

  	&:hover {
  		color: ${props => props.theme.primary}
  	}
`;

const StyledNav = styled.nav`
	align-items: center;
	${props => props.vertical && 'height: 100%;'}
	
	& ul {
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: ${props => props.vertical ? 'space-around' : 'space-between'};
		${props => props.vertical && `
			flex-direction: column;
			height: 100%;
			width: 100%;
		`}
	}
`;

function Menu(props) {
	const [activePage, setActivePage] = useState('Accueil');
	const yPosRef = useRef(0);
	const pagesId = [];
	let pagesY;

	useEffect(() => {
		pagesY = pagesId.map(id => {
			return document.getElementById(id).offsetTop + document.getElementById(id).offsetHeight;
		});
		window.addEventListener('scroll', () => {
			if (Math.abs(yPosRef.current - window.scrollY) > 90)
			{
				yPosRef.current = window.scrollY;
				yPosRef.current += 100;

				if (yPosRef.current < pagesY[0])
				{
					setActivePage(pagesId[0]);
				} 
				else if (pagesY[0] <= yPosRef.current && yPosRef.current < pagesY[1])
				{
					setActivePage(pagesId[1]);
				}
				else if (pagesY[1] <= yPosRef.current && yPosRef.current < pagesY[2])
				{
					setActivePage(pagesId[2]);
				}
				else if (pagesY[2] <= yPosRef.current && yPosRef.current < pagesY[3])
				{
					setActivePage(pagesId[3]);
				}
				else if (pagesY[3] <= yPosRef.current)
				{
					setActivePage(pagesId[4]);
				}
			}
		})
	},[yPosRef.current])

	const menuJSX = props.children.map(item => {
		const id = item.props.children.replace(/ /g, "").sansAccent();
		pagesId.push(id);
		return (
		<li key={item.props.children}>
			<MenuItem current={activePage === id} href={`#${id}`}>
				{item.props.children}
			</MenuItem>
		</li>
		)
	})

	
	return (
		<StyledNav vertical={props.vertical} className={props.vertical ? 'd-flex' : 'd-none d-md-flex'}>
			<ul>
				{menuJSX}
			</ul>
		</StyledNav>
	);
}

export default Menu