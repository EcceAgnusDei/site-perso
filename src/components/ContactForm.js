import React, { Component } from 'react';

import './ContactForm.css';
import Alert from './Alert';

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			alert: '',
			name: '',
			email: '',
			phoneNumber: '',
			message: '',
			legal: false
		};
	}

	handleSubmit = (event) => {
		let tempState = 'error';
		event.preventDefault();
		const {name, email, phoneNumber, message} = event.target;

		fetch('/API/contactMail.php', {
			method: 'POST',
			body: JSON.stringify([name.value, email.value, phoneNumber.value, message.value])
		})
		.then(response => response.json())
		.then((json) => {
			if(json === true) {
				this.setState({
					alert: 'success',
					name: '',
					email: '',
					phoneNumber: '',
					message: '',
					legal: false
				});
				tempState = 'success';
			}
		})

		setTimeout(() => {
			if (tempState === 'error') {
				this.setState({alert: 'error'})
			}
		}, 3000);
	}

	handleChange = (event) => {
		const {name, value, type, checked} = event.target;
  		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}

	closeAlert = () => {
		this.setState({alert: ''});
	}
	
	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit} className="contact-form">
					<div className="required_input">
						<input 
							type="text" 
							name="name" 
							placeholder="Nom et Prénom" 
							aria-label="Nom"
							onChange={this.handleChange}
							value={this.state.name}
							required
						/>
						<div className="star">*</div>
					</div>
					<div className="required_input">
						<input 
							type="email" 
							name="email" 
							placeholder="E-mail" 
							aria-label="email"
							onChange={this.handleChange}
							value={this.state.email}
							required
						/>
						<div className="star">*</div>
					</div>
					<input 
						type="text" 
						name="phoneNumber" 
						placeholder="Téléphone" 
						aria-label="téléphone"
						onChange={this.handleChange}
						value={this.state.phoneNumber}
					/>
					<div className="required_input">
						<textarea
							name="message" 
							placeholder="Méssage" 
							aria-label="message"
							onChange={this.handleChange}
							value={this.state.message}
							required
						/>
						<div className="star">*</div>
					</div>
					<label>
						<input 
							type="checkbox" 
							name="legal"
							onChange={this.handleChange}
							checked={this.state.legal}
							required
						/>En soumettant ce formulaire, j'accepte que les informations 
						saisies soient utilisées pour me recontacter.
					</label>
					<button className="btn">Envoyer</button>
				</form>
				{this.state.alert === 'success' &&
				<Alert click={this.closeAlert}>
					Merci, votre message à bien été envoyé !
				</Alert>}
				{this.state.alert === 'error' &&
				<Alert click={this.closeAlert}>
					Désolé, il y a eu un problème...
				</Alert>}

			</React.Fragment>
		);
	}
}

export default ContactForm
