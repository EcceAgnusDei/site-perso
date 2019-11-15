import React from 'react';
import styled from 'styled-components';

import PictureContainer from 'elements/PictureContainer';
import Separator from 'elements/Separator';

import FullArticle from './FullArticle';

const StyledDiv = styled.div`
	width: 100%;
	height: 240px;
	cursor: pointer;
`;

const Content = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
	display: flex;
	color: white;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 200ms linear;

	@media (hover: hover) {
		opacity: 0;
	}

	&:hover {
		opacity: 1;
	}
`;

const Title = styled.div`
	text-align: center;
`;

function Article({title, subtitle, img, text, link, imgMin, github, click}) {

	return (
		<StyledDiv onClick={() => click(
			(<FullArticle 
				title={title}
				subtitle={subtitle}
				text={text}
				link={link}
				github={github}
				img={img}
			/>),'portfolio'
		)}>
			<PictureContainer height="100%" url={imgMin}>
				<Content>
					<Title>
						{title}
					</Title>
					<Separator />
					<div>
						{subtitle}
					</div>
				</Content>
			</PictureContainer>
		</StyledDiv>
	);
}

export default Article;