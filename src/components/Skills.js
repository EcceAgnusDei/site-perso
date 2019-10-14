import React from 'react';
import Scale from './Scale';
import GlobalSkills from './GlobalSkills';
import ScaledSkills from './ScaledSkills';
import skillsList from './libs/skills';
import hardSkills from './libs/hardSkills';
import softSkills from './libs/softSkills';
import './Skills.css'

function Tools(props) {
	return (
		<section id="competences">
			<div className="container">
				<h2>compétences</h2>
				<div className="row">
					<ScaledSkills title="Compétences techniques">
						{skillsList}
					</ScaledSkills>
					<div className="global_skills col-12 col-md-6">
						<GlobalSkills title="Savoir faire">
							{hardSkills}
						</GlobalSkills>
						<GlobalSkills title="Savoir être">
							{softSkills}
						</GlobalSkills>
					</div>
				</div>
			</div>		
		</section>
	);
}

export default Tools