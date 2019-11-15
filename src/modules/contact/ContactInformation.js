import React from 'react';
import {FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin-bottom: 12px;
`;

const StyledTitle = styled.h4`
	margin-bottom: 4px;
`;

const ItalicSpan = styled.span`
	font-style: italic
`;

function ContactInformation(props) {
	return (
		<>
			<StyledDiv>
				<StyledTitle>adresse</StyledTitle>
				
				<div>
					<FaMapMarkerAlt />
					<ItalicSpan> 16 rue Abel Tuffier 93330 Neuilly Sur Marne</ItalicSpan>
				</div>
			</StyledDiv>
			<StyledDiv>
				<StyledTitle>téléphone</StyledTitle>
				<div>
					<FaPhone />
					<ItalicSpan> 06.34.18.26.67</ItalicSpan>
				</div>
			</StyledDiv>
			<StyledDiv>
				<StyledTitle>e-mail</StyledTitle>
				<div>
					<FaEnvelope />
					<ItalicSpan> mondo.antoine@yahoo.fr</ItalicSpan>
				</div>
			</StyledDiv>
		</>
	);
}

export default ContactInformation