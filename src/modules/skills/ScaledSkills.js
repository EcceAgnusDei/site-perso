import React from 'react';
import styled from 'styled-components';

import Scale from './Scale';

const StyledDiv = styled.div`
	min-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function ScaledSkills(props) {
	const langagesJSX = props.children.map((item, index) => 
		<div key={index}>
			<p className="m-0 text-center text-md-left">{item.nom}</p>
			<Scale level={item.niveau} />
		</div>
	)
	return (
		<StyledDiv>
			<h3>{props.title}</h3>
			<div className={`flex-fill 
				d-flex 
				flex-column 
				align-items-center 
				align-items-md-start 
				justify-content-between`}
			>
				{langagesJSX}
			</div>
		</StyledDiv>
	);
}

export default ScaledSkills