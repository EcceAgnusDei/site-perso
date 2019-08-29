import React from 'react';
import Info from './ContactInformation';
import Form from './ContactForm';

function Contact() {
	return (
		<section id="contact">
			<div className="container">
				<h2>contactez-moi</h2>
				<div className="body">
					<Info />
					<Form />
				</div>
			</div>
		</section>
	);
}

export default Contact;