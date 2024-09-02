import './ProjectModal.css';
import {
  DiReact,
  DiJavascript,
  DiCss3,
  DiNodejs,
  DiHtml5,
} from "react-icons/di";
import { BsBadge3D } from "react-icons/bs";
import { SiReactrouter } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

import {AiOutlineCloseCircle} from 'react-icons/ai'

function ProjectModal ({
	onClose,
	project}){
	return(
		<>
		<div className='modalBackground' onClick={onClose}>
		<div className='projectPageContainer'>
			<div className='closeButton' onClick={onClose}><AiOutlineCloseCircle/></div>
			<h2 className='titleProjectPage'>{project.title}</h2>
			<div className='infoProjectContainer'>
			<div className='screenshotContainer'>
			<img className='screenshotProjectPage' src={project.screenshots[0]} alt="screenshot" />
			<img className='screenshotProjectPage' src={project.screenshots[1]} alt="screenshot" />
			<img className='screenshotProjectPage' src={project.screenshots[2]} alt="screenshot" />
			</div>
			<div className='descriptionProjectPage'>{project.descriptionLong}</div>
			</div>
			<div className='logosProjectContainer'>
				<div className='logoProject'>{project.diReact && <DiReact/> }</div>
				<div className='logoProject'>{project.diJavascript && <DiJavascript/> }</div>
				<div className='logoProject'>{project.diCss3 && <DiCss3/> }</div>
				<div className='logoProject'>{project.diNodejs && <DiNodejs/> }</div>
				<div className='logoProject'>{project.diHtml5 && <DiHtml5/> }</div>
				<div className='logoProject'>{project.siReactrouter && <SiReactrouter/> }</div>
				<div className='logoProject'>{project.BsBadge3D && <BsBadge3D/> }</div>
				<div className='logoProject'>{project.BsBadge3D && <FiFigma /> }</div>
			</div>
		</div>
		</div>
		</>
	)
}

export default ProjectModal;