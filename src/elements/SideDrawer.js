import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	width: 100%;
	position: fixed;
	z-index: 3000;
	top: 0;
	left: 0;
	transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
	transition: 0.3s ease-out;
`;

const DrawerContent = styled.div`
	width: ${props => props.width};
	height: 100vh;
	background-color: white;
	box-shadow: 2px 0px 9px 2px rgba(0, 0, 0, 0.5);
	overflow: auto;
`;

function SideDrawer(props) {
	return (
		<Backdrop onClick={props.backdropClick} open={props.open}>
			<DrawerContent width={props.width}>
				{props.children}
			</DrawerContent>
		</Backdrop>
	);
}

SideDrawer.defaultProps = {
	width: '70%'
}

export default SideDrawer;