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
			legal: false,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
	}

	handleChange = (event) => {
		// const {name, value, type, checked} = event.target
  //       type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="contact-form">
				Pour l'instant, le formulaire n'est pas fonctionnel.
				<input 
					type="text" 
					name="name" 
					placeholder="Nom et Prénom" 
					aria-label="Nom"
					onChange={this.handleChange}
					required
				/>
				<input 
					type="text" 
					name="email" 
					placeholder="E-mail" 
					aria-label="email"
					onChange={this.handleChange}
					required
				/>
				<input 
					type="text" 
					name="phoneNumber" 
					placeholder="Téléphone" 
					aria-label="téléphone"
					onChange={this.handleChange}
					required
				/>
				<textarea
					name="phoneNumber" 
					placeholder="Méssage" 
					aria-label="message"
					onChange={this.handleChange}
					required
				/>
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
