import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Title from 'elements/Title2';

import Info from './ContactInformation';
import Form from './ContactForm';

function Contact() {
	return (
		<section id="contact">
			<Container>
				<Title>contactez-moi</Title>
				<Grid container>
					<Grid item xs={12} md={6}>
						<Info bootstrapClass="contact_info" />
					</Grid>
					<Grid item xs={12} md={6}>
						<Form />
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}

export default Contact;