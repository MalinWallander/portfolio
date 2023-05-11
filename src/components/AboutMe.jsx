import './AboutMe.css';
import React from 'react';
import img from "../assets/geometrical-img.avif";

function AboutMe() {

	function FadeInSection(props) {
		const [isVisible, setVisible] = React.useState(false);
		const domRef = React.useRef();
		React.useEffect(() => {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => setVisible(entry.isIntersecting));
			});
			observer.observe(domRef.current);
		}, []);
		return (
			<div
				className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
				ref={domRef}
			>
				{props.children}
			</div>
		);
	}

	return (
		<>
		<div id="about" className="aboutContainer">
			<img src={img} alt="red geometrical image" className="geometricalImageAboutMe"/>
			<FadeInSection>
					<div className="textAboutMeContainer">
						<div className="titleAboutMe">about me:</div>
						<div className="presentationAboutMe">
							<p>My name is Malin Wallander, currently 31 years old. I am a former dentist that have returned to school to learn something brand new, coding! Frontend development gives me the freedom of visual creativity combined with the structure of coding-logic. What could be better? 
							</p>
							<br />
							<p>I'm looking forward to learning more in the world of tech, and expanding my horizon when it comes to both frontend and backend. I love the feeling of learning and applying new knowledge and hope I get to experience that my entire career. </p>
							<br />
							<p> As a Stockholmer since birth I have lived in a few places around town but currently live in the south parts, at Telefonplan. </p>
							<br />
							<p> When I have the chance I love to travel. I try to do it as earth grounded as possible, which usually ends up with me sitting on a bus or train for days at a time. </p>
						</div>
          </div>
        </FadeInSection>
		</div>
		</>
	)
}

export default AboutMe;