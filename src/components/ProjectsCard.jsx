import './ProjectsCard.css';

function ProjectsCard({title, screenshot, description, projectURL, projectGit, logoReact, logoCSS, logoHTML, logoJS, logoRouter}){

	return(
		<>
		<div className="projectCardContainer">
			<div className='visualInfoProject'>
				<img className='screenshotProject' src={screenshot} alt="screenshot" />
				<div className='logosContainer'>
				<div className='logosProject'>{logoReact}{logoCSS}{logoHTML}{logoJS}{logoRouter}</div>
				</div>
			</div>
			<div className='textInfoProject'>
				<h2 className='titleProject'>{title}</h2>
				<div className='descriptionProject'>{description}</div>
				<a className='linkProjectPage' href="">See more...</a>
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