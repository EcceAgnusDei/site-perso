import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	margin-top: 7px;
`;

const StyledDiv = styled.div`
	&:first-child {
		margin-bottom: 33px;
	}
`;

function GlobalSkills(props) {
	const globalSkillsJSX = props.children.map((item, index) =>
		<Item key={index}>
			<strong>{item.titre}</strong>
			<br/>
			<em>{item.text}</em>
		</Item>
	)
	return (
		<StyledDiv>
			<h3>{props.title}</h3>
			{globalSkillsJSX}
		</StyledDiv>
	);
}

export default GlobalSkills