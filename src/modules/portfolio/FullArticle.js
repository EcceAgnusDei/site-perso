import React from 'react';
import styled from 'styled-components';

import PictureContainer from 'elements/PictureContainer';
import Button from 'elements/Button';
import FlexContainer from 'elements/FlexContainer';

const StyledDiv = styled(FlexContainer)`
	margin: auto;
	padding: 30px;
	flex-direction: column;

	& li {
		list-style-type: circle;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;

	& a {
		margin: 7px;
	}
`;

function FullArticle({title, subtitle, text, link, img, github}) {
	return (
		<StyledDiv>
			<div>{title} - {subtitle}</div>
			<div>{text}</div>
			{img &&
			<PictureContainer width='100%' mH='300px' shadow url={img}/>}
			<BtnWrapper>
				{link.length > 0 && 
				<a 
					href={link}
					target="_blank" 
					rel="noopener noreferrer"
				>
					<Button>Le site</Button>
				</a>}
				{github &&
				<a 
					href={github}
					target="_blank" 
					rel="noopener noreferrer"
				>
					<Button>Le code</Button>
				</a>}
			</BtnWrapper>		
		</StyledDiv>
	);
}

export default FullArticle;