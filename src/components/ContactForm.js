import React, { Component } from 'react';
import './ContactForm.css'

class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phoneNumber: '',
			message: '',
			legal: false
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {name, email, phoneNumber, message} = event.target;

		fetch(`/API/contactMail.php`, {
			method: 'POST',
			body: JSON.stringify([name.value, email.value, phoneNumber.value, message.value])
		})
		.then(() => {
			alert('Message Envoyé');
			this.setState({
				name: '',
				email: '',
				phoneNumber: '',
				message: '',
				legal: false
			});
		});
	}

	handleChange = (event) => {
		const {name, value, type, checked} = event.target;
  		type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}
	
	render() {
		return (
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
		);
	}
}

export default ContactForm
