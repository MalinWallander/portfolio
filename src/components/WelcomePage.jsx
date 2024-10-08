import './WelcomePage.css';
import img from '../assets/face-img.png';

function WelcomePage(){
	return(
		<>
		<div id="welcome" className="welcomeContainer">
		<div id="particle-container">
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
			<div className="particle"></div>
		</div>
			<div className="titleWelcome">Welcome to my portfolio</div>
			<div className="contentWelcome">
				<img src={img} alt="my face" className="faceImage"/>
				<div className="textWelcome">So happy to have you here. Please take a look around!</div>
			</div>
		</div>
		</>
	);
};

export default WelcomePage;