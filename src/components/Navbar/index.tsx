
import {SiLinkedin, SiInstagram} from 'react-icons/si';

import "./styles.css";

const Navbar = () => {
	return (
		<div id="Navbar">
			<div id="Navbar-none"></div>
			<div id="Navbar-button">
				<button>INÍCIO</button>
				<button>TEXTOS</button>
				<button>CONTATO</button>
			</div>
			<div id="Navbar-icon">
				<a href="https://www.linkedin.com/in/professoramarinacosta/" target={'_blank'}>
					<SiLinkedin style={{backgroundColor: '#fff'}} />
				</a>
				<a href="https://www.instagram.com/agoraemportugues/" target={'_blank'}>
					<SiInstagram />
				</a>
			</div>
		</div>
	)
}

export default Navbar