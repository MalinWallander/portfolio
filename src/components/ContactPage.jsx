import './ContactPage.css'
import {FaGithub, FaLinkedin, FaPhoneSquareAlt} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

function ContactPage (){
	return(
		<div id='contact' className='contactPageContainer'>
			<div className='titleContact'> I would love to get in touch! </div>
			<div className='textContact'>Here are a few ways to reach me:</div>
			<div className='logosContact'>
				<a href='https://github.com/MalinWallander' target='_blank' className='logoContact'><FaGithub/></a>
				<a href="https://www.linkedin.com/in/malin-wallander-209969248/" className='logoContact'><FaLinkedin/></a>
				<div onClick={() => window.location = 'mailto:maalinwallander@gmail.com'} className='logoContact'><FiMail/></div>
			</div>
		</div>
	)
}

export default ContactPage;