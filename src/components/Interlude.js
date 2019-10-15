import React from 'react';
import { Parallax } from 'react-parallax';

function Interlude(props) {
	const height = 300;
	return (
		<Parallax
			bgImage={props.img}
    		strength={200}
    		style={{
    			height: height
			}}
		>
			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.3)',
					height: height,
					width: '100%'
				}}
			>
				{props.children}
			</div>
		</Parallax>
	);
}

export default Interlude