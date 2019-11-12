import React from 'react';

function ContactInformation(props) {
	return (
		<div className={props.bootstrapClass}>
			<div className="mb-4">
				<h4 className="mb-1">adresse</h4>
				
				<div className="contact_info-item-p">
					<i className="fas fa-map-marked-alt"></i>
					<span className="font-italic"> 16 rue Abel Tuffier 93330 Neuilly Sur Marne</span>
				</div>
			</div>
			<div className="mb-4">
				<h4 className="mb-1">téléphone</h4>
				<div className="contact_info-item-p">
					<i className="fas fa-phone"></i>
					<span className="font-italic"> 06.34.18.26.67</span>
				</div>
			</div>
			<div className="mb-4">
				<h4 className="mb-1">e-mail</h4>
				<div className="contact_info-item-p">
					<i className="far fa-envelope"></i>
					<span className="font-italic"> mondo.antoine@yahoo.fr</span>
				</div>
			</div>
		</div>
	);
}

export default ContactInformation