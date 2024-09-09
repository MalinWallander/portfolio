import './Header.css';
import {BiDownload} from "react-icons/bi";
import {Link} from 'react-scroll';

function Header() {
	return (
		<>
		<div className='headerContainer'>
			<div className='MWLogo'><Link to="welcome" spy={true} smooth={true}>MW.</Link></div>
			<ul className='navList'>
				<li><Link to="about" spy={true} smooth={true}>About me</Link></li>
				<li><Link to="skills" spy={true} smooth={true}>My skills</Link></li>
				<li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
				<li><Link to="contact" spy={true} smooth={true}>Contact me</Link></li>
			</ul>
			<a href='./src/assets/CV.pdf' download className='downloadCV'><BiDownload className='downloadLogo'/>CV</a>
		</div>
		</>
	)
}

export default Header;