import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import theme from 'theme'


import Button from 'elements/Button';

import Alert from './Alert';

const StyledLabel = styled.div`
	& label span {
		font-size: 0.8rem;
	}
`;

const StyledField = withStyles({
	root: {
	    '& .MuiOutlinedInput-root': {
	      '&:hover fieldset': {
	        borderColor: theme.primary,
	      }
	    }
	}
})(TextField);

const StyledForm = styled.form`
	max-width: 520px;
	margin: auto;
`;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alert: '',
			name: '',
			email: '',
			phoneNumber: '',
			message: '',
			sent: false,
			submited: false,
			legal: false
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ submited: true })

		const {name, email, phoneNumber, message} = this.state;
		console.log(name, email, message);

		if(name && validateEmail(email) && message) {
			this.setState({ sent: true })
			let tempState = 'error';

			fetch('/API/contactMail.php', {
				method: 'POST',
				body: JSON.stringify([name, email, phoneNumber, message])
			})
			.then(response => response.json())
			.then((json) => {
				if(json === true) {
					this.setState({
						alert: 'success',
						name: '',
						sent: false,
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
					this.setState({alert: 'error', submited: false, sent: false})
				}
			}, 3000);
		}
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
				<StyledForm 
					onSubmit={this.handleSubmit}
					id="contact-form"
				>
					<StyledField
						error={this.state.submited && this.state.name.length === 0}
						variant="outlined"
						margin="dense"
						fullWidth
						type="text" 
						name="name" 
						label="Nom et Prénom *"
						onChange={this.handleChange}
						value={this.state.name}
					/>
					<StyledField
						error={this.state.submited && !validateEmail(this.state.email)}
						variant="outlined"
						margin="dense"
						fullWidth
						type="email" 
						name="email" 
						label="E-mail *"
						onChange={this.handleChange}
						value={this.state.email}
					/>
					<StyledField
						variant="outlined"
						margin="dense"
						fullWidth
						type="text" 
						name="phoneNumber" 
						label="Téléphone"
						onChange={this.handleChange}
						value={this.state.phoneNumber}
					/>
					<StyledField
						error={this.state.submited && this.state.message.length === 0}
						variant="outlined"
						margin="normal"
						fullWidth
						multiline
						name="message" 
						label="Message *"
						onChange={this.handleChange}
						value={this.state.message}
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
					{this.state.sent ? (
						<CircularProgress />
					) : (
						<Button 
							onClick={() => {
									this.setState({submited: true});
								}	
							}
						>Envoyer
						</Button>
					)}
				</StyledForm>
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

export default ContactForm;
