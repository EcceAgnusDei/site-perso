import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import skillsList from 'libs/skills';
import hardSkills from 'libs/hardSkills';
import softSkills from 'libs/softSkills';
import Title from 'elements/Title2';

import GlobalSkills from './GlobalSkills';
import ScaledSkills from './ScaledSkills';

function Tools(props) {
	return (
		<section id="competences">
			<Container>
				<Title>compétences</Title>
				<Grid container>
					<Grid item xs={12} md={4}>
						<ScaledSkills title="Compétences techniques">
							{skillsList}
						</ScaledSkills>
					</Grid>
					<Grid item xs={12} md={8}>
						<GlobalSkills title="Savoir faire">
							{hardSkills}
						</GlobalSkills>
						<GlobalSkills title="Savoir être">
							{softSkills}
						</GlobalSkills>
					</Grid>
				</Grid>
			</Container>		
		</section>
	);
}

export default Tools