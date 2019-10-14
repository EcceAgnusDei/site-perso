import React from 'react';
import Info from './ContactInformation';
import Form from './ContactForm';

function Contact() {
	return (
		<section id="contact">
			<div className="container">
				<h2>contactez-moi</h2>
				<div className="row">
					<Info bootstrapClass="contact_info col-12 col-sm-4 col-md-6"/>
					<Form bootstrapClass="col-12 col-sm-8 col-md-6"/>
				</div>
			</div>
		</section>
	);
}

export default Contact;