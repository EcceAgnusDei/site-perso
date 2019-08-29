import React from 'react'

function ContactInformation() {
	return (
		<div className="contact_info">
			<div className="contact_info-item">
				<h4>adresse</h4>
				<i className="fas fa-map-marked-alt"></i>
				<div className="contact_info-item-p">
					16 rue Abel Tuffier 93330 Neuilly Sur Marne
				</div>
			</div>
			<div className="contact_info-item">
				<h4>téléphone</h4>
				<i className="fas fa-phone"></i>
				<div className="contact_info-item-p">
					06.34.18.26.67
				</div>
			</div>
			<div className="contact_info-item">
				<h4>e-mail</h4>
				<i className="far fa-envelope"></i>
				<div className="contact_info-item-p">
					mondo.antoine@yahoo.fr
				</div>
			</div>
		</div>
	);
}

export default ContactInformation