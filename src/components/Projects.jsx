import './Projects.css';
import {DiReact, DiJavascript, DiCss3, DiNodejs, DiHtml5} from 'react-icons/di';
import {FaDocker} from 'react-icons/fa';
import {SiReactrouter} from 'react-icons/si';
import './WelcomePage.css';

import ProjectsCard from './ProjectsCard';

function Projects(){
	return (
		<>
		<div className='projectsContainer' id='projects'>
		<img src="src/assets/layered-waves-haikei-edited.png" alt="waves" className='wavesImg'/>
		<h2 className='titleProjects'>projects I've worked on:</h2>
		<div className='projectsCardContainer'>
			<ProjectsCard title={'Travel agency website'} screenshot='src/assets/travelReact.png' description={'A project where we recreated a single page application based on a given design file. Coded in React and styled with CSS, incorporating React Router for navigation.'} logoReact={<DiReact/>} logoCSS={<DiCss3/>} logoRouter={<SiReactrouter/>}projectURL={'https://gentle-florentine-40a92e.netlify.app/'} projectGit={'https://github.com/MalinWallander/TravelPage-React'}/>
			
			<ProjectsCard title={'Game arcade'} screenshot='src/assets/geography-arcade.png' description={'A project where we created retro styled geography related games using JavaScript, HTML and CSS. Calling real time (like temperature) data with APIs. I created the snake-game, guess the weather-game and bucket list.'} logoCSS={<DiCss3/>} logoJS={<DiJavascript/>} logoHTML={<DiHtml5/>} projectGit={'https://github.com/MalinWallander/Game-group-2'} projectURL={'https://shiny-maamoul-d09a01.netlify.app/'}/>

			<ProjectsCard title={'Client project'} screenshot='src/assets/inner-journey.png' description={'A project where we worked with UX-design students who made the design and we implemented in React. React router was used to create navigation and libraries for image-carousels.'} logoReact={<DiReact/>} logoRouter={<SiReactrouter/>} logoCSS={<DiCss3/>} projectGit={'https://github.com/MalinWallander/Game-group-2'} projectURL={'https://shiny-maamoul-d09a01.netlify.app/'}/>
			
			<ProjectsCard title={'Mulan 90s website'} screenshot='src/assets/mulan-website.png' description={'My first ever coding project! It is all done in HTML and CSS. While not being the most sleek or complex, it shows where I began. And with a theme of 90s website, it was the perfect excuse to make it as ugly as possible!'} logoHTML={<DiHtml5/>} logoCSS={<DiCss3/>} projectGit={'https://github.com/MalinWallander/Mulan-website'} projectURL={'https://mellow-ganache-a272bd.netlify.app/'}/>
		</div>
		</div>
		</>
	)
}

export default Projects;