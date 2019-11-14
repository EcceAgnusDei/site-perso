import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


import Button from 'elements/Button';

import Alert from './Alert';

const StyledLabel = styled.div`
	& label span {
		font-size: 0.8rem;
	}
`;

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
			<>
				<form 
					onSubmit={this.handleSubmit} 
					className={this.state.submited ? "was-validated" : ""}
					id="contact-form"
				>
					<TextField
						margin="normal"
						fullWidth
						type="text" 
						name="name" 
						placeholder="Nom et Prénom" 
						aria-label="Nom"
						onChange={this.handleChange}
						value={this.state.name}
						required
						InputProps={{
							startAdornment: <InputAdornment position="start">*</InputAdornment>,
						}}
					/>
					<TextField
						margin="normal"
						fullWidth
						type="email" 
						name="email" 
						placeholder="E-mail" 
						aria-label="email"
						onChange={this.handleChange}
						value={this.state.email}
						required
						InputProps={{
							startAdornment: <InputAdornment position="start">*</InputAdornment>,
						}}
					/>
					<TextField
						margin="normal"
						fullWidth
						type="text" 
						name="phoneNumber" 
						placeholder="Téléphone" 
						aria-label="téléphone"
						onChange={this.handleChange}
						value={this.state.phoneNumber}
					/>
					<TextField
						margin="normal"
						fullWidth
						multiline
						name="message" 
						placeholder="Méssage" 
						aria-label="message"
						onChange={this.handleChange}
						value={this.state.message}
						required
						InputProps={{
							startAdornment: <InputAdornment position="start">*</InputAdornment>,
						}}
					/>
					<StyledLabel>
						<FormControlLabel
							control={
								<Checkbox  
									name="legal"
									color="primary"
									id="checkAgreement"
									onChange={this.handleChange}
									checked={this.state.legal}
									required
								/>
							}
							label={`En soumettant ce formulaire, j'accepte que les informations 
							saisies soient utilisées pour me recontacter.`}
							labelPlacement="end"
						/>
					</StyledLabel>
					<Button 
						onClick={() => {
								this.setState({submited: true});
							}	
						}
					>Envoyer
					</Button>
				</form>
				{this.state.alert === 'success' &&
				<Alert click={this.closeAlert}>
					Merci, votre message à bien été envoyé !
				</Alert>}
				{this.state.alert === 'error' &&
				<Alert click={this.closeAlert}>
					Désolé, il y a eu un problème...
				</Alert>}
			</>
		);
	}
}

export default ContactForm
