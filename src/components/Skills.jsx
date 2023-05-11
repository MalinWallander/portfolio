import './Skills.css';

function Skills() {
	return(
		<>
		<div className="skillsContainer" id='skills'>
			<div className="titleSkills">skills</div>
			<div className="containersSkills">


				<div className='hardSkills'>
				<div className='hardSkillsInner'>
					<div className="hardSkillsFront">
						<div className='bigTextSkills'>HARD</div>
					</div>
					<div className='hardSkillsBack'>					
						<p className='skills'>HTML</p>
						<p className='skills'>CSS</p>
						<p className='skills'>Javascript</p>
						<p className='skills'>React</p>
						<p className='skills'>Node.js</p>
						<p className='skills'>Docker</p>
					</div>
						</div>
					</div>

				<div className="softSkills">
				<div className='softSkillsInner'>
					<div className="softSkillsFront">
						<div className='bigTextSkills'>SOFT</div>
					</div>
					<div className='softSkillsBack'>
					<p className='skills'>Scrum</p>
						<p className='skills'>Teamwork</p>
						<p className='skills'>Openmindness</p>
						<p className='skills'>Communication</p>
						<p className='skills'>Feedback</p>
						<p className='skills'>FIRO</p>
					</div>
						</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Skills;