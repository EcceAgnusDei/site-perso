import React from 'react';
import './ContactInformation.css'

function ContactInformation() {
	return (
		<div className="contact_info">
			<div className="contact_info-item">
				<h4>adresse</h4>
				
				<div className="contact_info-item-p">
					<i className="fas fa-map-marked-alt"></i>
					<span className="content"> 16 rue Abel Tuffier 93330 Neuilly Sur Marne</span>
				</div>
			</div>
			<div className="contact_info-item">
				<h4>téléphone</h4>
				<div className="contact_info-item-p">
					<i className="fas fa-phone"></i>
					<span className="content"> 06.34.18.26.67</span>
				</div>
			</div>
			<div className="contact_info-item">
				<h4>e-mail</h4>
				<div className="contact_info-item-p">
					<i className="far fa-envelope"></i>
					<span className="content"> mondo.antoine@yahoo.fr</span>
				</div>
			</div>
		</div>
	);
}

export default ContactInformation