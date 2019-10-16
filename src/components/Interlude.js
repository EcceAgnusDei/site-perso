import React from 'react';
import { Parallax } from 'react-parallax';

import Overlay from './Overlay.js';

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
			<Overlay height={height}>
				{props.children}
			</Overlay>
		</Parallax>
	);
}

export default Interlude