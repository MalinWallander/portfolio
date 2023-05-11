import './ProjectsCard.css';
import {
  DiReact,
  DiJavascript,
  DiCss3,
  DiNodejs,
  DiHtml5,
} from "react-icons/di";
import { SiReactrouter } from "react-icons/si";

function ProjectsCard({
	title, 
	screenshot, 
	description, 
	projectURL, 
	projectGit, 
	diReact,
	diJavascript,
	diCss3,
	diNodejs,
	diHtml5,
	siReactrouter,
	project,
	onClick
}
	){
	return (
		<>
		<div className="projectCardContainer" onClick={() => onClick(project)}>
			<div className='visualInfoProject'>
				<img className='screenshotProject' src={screenshot} alt="screenshot" />
				<div className='logosContainer'>
				<div className='logosProject'>
				{diReact && <DiReact/> }
				{diJavascript && <DiJavascript/> }
				{diCss3 && <DiCss3/> }
				{diNodejs && <DiNodejs/> }
				{diHtml5 && <DiHtml5/> }
				{siReactrouter && <SiReactrouter/> }
				</div>
				</div>
			</div>
			<div className='textInfoProject'>
				<h2 className='titleProject'>{title}</h2>
				<div className='descriptionProject'>{description}</div>
				<a className='linkProjectPage' >See more...</a>
			</div>
			<div className='buttonsContainer'>
				<a href={projectURL} target='_blank'><button className='liveButton'>Live Demo</button></a>
				<a href={projectGit} target='_blank'><button className='gitHubButton' >GitHub repo</button></a>
			</div>
		</div>
		</>
	)
	
}

export default ProjectsCard;