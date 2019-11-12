import React from 'react';

import Title from 'elements/Title2';

import Info from './ContactInformation';
import Form from './ContactForm';

function Contact() {
	return (
		<section id="contact">
			<div className="container">
				<Title>contactez-moi</Title>
				<div className="row">
					<Info bootstrapClass="contact_info col-12 col-md-6"/>
					<Form bootstrapClass="col-12 col-md-6"/>
				</div>
			</div>
		</section>
	);
}

export default Contact;