import React from 'react';

import skillsList from 'libs/skills';
import hardSkills from 'libs/hardSkills';
import softSkills from 'libs/softSkills';
import Title from 'elements/Title2';

import GlobalSkills from './GlobalSkills';
import ScaledSkills from './ScaledSkills';

function Tools(props) {
	return (
		<section id="competences">
			<div className="container">
				<Title>compétences</Title>
				<div className="row">
					<ScaledSkills title="Compétences techniques">
						{skillsList}
					</ScaledSkills>
					<div className="col-12 col-md-8 mt-5 mt-md-0">
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