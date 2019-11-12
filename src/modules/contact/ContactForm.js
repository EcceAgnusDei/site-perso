import React, { Component } from 'react';

import Alert from './Alert';

class ContactForm extends Component {
	constructor(props) {
		super(props);
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
		event.preventDefault();
		let tempState = 'error';
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
					submited: false,
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
			<div className={this.props.bootstrapClass}>
				<form 
					onSubmit={this.handleSubmit} 
					className={this.state.submited ? "was-validated" : ""}
					id="contact-form"
				>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">*</span>
						</div>
						<input 
							type="text" 
							name="name" 
							placeholder="Nom et Prénom" 
							aria-label="Nom"
							onChange={this.handleChange}
							value={this.state.name}
							className="form-control"
							required
						/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">*</span>
						</div>
						<input 
							type="email" 
							name="email" 
							placeholder="E-mail" 
							aria-label="email"
							onChange={this.handleChange}
							value={this.state.email}
							className="form-control"
							required
						/>
					</div>
					<div className="form-group">
						<input 
							type="text" 
							name="phoneNumber" 
							placeholder="Téléphone" 
							aria-label="téléphone"
							onChange={this.handleChange}
							value={this.state.phoneNumber}
							className="form-control"
						/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text">*</span>
						</div>
						<textarea
							name="message" 
							placeholder="Méssage" 
							aria-label="message"
							onChange={this.handleChange}
							value={this.state.message}
							className="form-control"
							required
						/>
					</div>
					<div className="form-check">
						<input 
							type="checkbox" 
							name="legal"
							id="checkAgreement"
							className="form-check-input"
							onChange={this.handleChange}
							checked={this.state.legal}
							required
						/>
						<label 
							htmlFor="checkAgreement" 
							className="form-check-label"
							style={{fontSize: '0.7em'}}
						>
							En soumettant ce formulaire, j'accepte que les informations 
							saisies soient utilisées pour me recontacter.
						</label>
					</div>
					<button 
						className="btn" 
						onClick={() => {
								this.setState({submited: true});
							}	
						}
					>Envoyer
					</button>
				</form>
				{this.state.alert === 'success' &&
				<Alert click={this.closeAlert}>
					Merci, votre message à bien été envoyé !
				</Alert>}
				{this.state.alert === 'error' &&
				<Alert click={this.closeAlert}>
					Désolé, il y a eu un problème...
				</Alert>}
			</div>
		);
	}
}

export default ContactForm
