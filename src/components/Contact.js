import React from 'react';
import Info from './ContactInformation';
import Form from './ContactForm';

import Title from './Title2';

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