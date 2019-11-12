import React from 'react';
import { Parallax } from 'react-parallax';
import ProgressiveImage from 'react-progressive-image';

import Overlay from './Overlay.js';

function ProgressiveParallax({	src, placeHolder, height, children, overlay,...parallaxProps }) {
	return (
		<ProgressiveImage src={src} placeholder={placeHolder}>
		{src => (
			<Parallax 
				{...parallaxProps}
				bgImage={src}
				style={{ height }}
			>
			{overlay && (
				<Overlay height={height}/>
			)}
			</Parallax>
		)}
		</ProgressiveImage>
	);
}

export default ProgressiveParallax