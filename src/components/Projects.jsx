import { useState } from 'react';
import './Projects.css';
import wavesImg from '../assets/layered-waves-haikei-edited.png';
import projects from '../data/projects';

import ProjectsCard from './ProjectsCard';
import ProjectModal from './ProjectModal';

function Projects(){
	const [modalVisible, setModalVisible] = useState(false);
	const [activeProject, setActiveProject] = useState({});

	const handleClick = (project) => {
		console.log(project);
		setModalVisible(true);
		setActiveProject(project);
	}

	const handleClose = () => {
		setModalVisible(false);
	}

	return (
		<>
		<div className='projectsContainer' id='projects'>
			<img src={wavesImg} alt="waves" className='wavesImg'/>
			<h2 className='titleProjects'>projects I've worked on:</h2>
			<div className='projectsCardContainer'>
				{projects.map(project => (
					<ProjectsCard 
						title={project.title} 
						screenshot={project.screenshots[0]} 
						description={project.descriptionShort} 
						logos={project.logos} 
						projectURL={project.projectURL} 
						projectGit={project.projectGit}
						diReact={project.diReact}
						diJavascript={project.diJavascript}
						diCss3={project.diCss3}
						diNodejs={project.diNodejs}
						diHtml5={project.diHtml5}
						siReactrouter={project.siReactrouter}
						project={project}
						onClick={handleClick}
					/>
					)
				)}
			</div>
			{modalVisible && <ProjectModal onClose={handleClose} project={activeProject} />}
		</div>
		</>
	)
}

export default Projects;