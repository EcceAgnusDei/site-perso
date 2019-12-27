import React from 'react';
import styled from 'styled-components';

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const StyledDiv = styled.div`
	margin-bottom: 12px;
`;

const StyledTitle = styled.h4`
	margin-bottom: 4px;
`;

const ItalicSpan = styled.span`
	font-style: italic;
`;

function ContactInformation(props) {
	return (
		<>
			<StyledDiv>
				<StyledTitle>adresse</StyledTitle>

				<div>
					<RoomIcon color="primary" />
					<ItalicSpan> 16 rue Abel Tuffier 93330 Neuilly Sur Marne</ItalicSpan>
				</div>
			</StyledDiv>
			<StyledDiv>
				<StyledTitle>téléphone</StyledTitle>
				<div>
					<PhoneIcon color="primary" />
					<ItalicSpan> 06.34.18.26.67</ItalicSpan>
				</div>
			</StyledDiv>
			<StyledDiv>
				<StyledTitle>e-mail</StyledTitle>
				<div>
					<EmailIcon color="primary" />
					<ItalicSpan> mondo.antoine@yahoo.fr</ItalicSpan>
				</div>
			</StyledDiv>
		</>
	);
}

export default ContactInformation;
