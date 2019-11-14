import React from 'react';

import Container from '@material-ui/core/Container';

import Title from 'elements/Title2';

import Info from './ContactInformation';
import Form from './ContactForm';

function Contact() {
	return (
		<section id="contact">
			<Container>
				<Title>contactez-moi</Title>
				<div className="row">
					<Info bootstrapClass="contact_info col-12 col-md-6"/>
					<Form bootstrapClass="col-12 col-md-6"/>
				</div>
			</Container>
		</section>
	);
}

export default Contact;