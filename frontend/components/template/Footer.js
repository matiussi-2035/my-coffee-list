import Logo from './Logo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (  
        <footer>
			  <div className="footer-wrapper">
					<div className="logo">
						<Logo /> 
					</div>
					<div className="nav-footer">
						<Link href="#"><a className="nav-footer-item">Home</a></Link>
						<Link href="#"><a className="nav-footer-item">Account</a></Link>
						<Link href="#"><a className="nav-footer-item">Support</a></Link>
						<Link href="#"><a className="nav-footer-item">About</a></Link>
					</div>
					<div className="social-footer">
						<Link href="#"><a className="social-icon"><FontAwesomeIcon icon={faFacebookSquare} /></a></Link>
						<Link href="#"><a className="social-icon"><FontAwesomeIcon icon={faInstagramSquare} /></a></Link>
						<Link href="#"><a className="social-icon"><FontAwesomeIcon icon={faTwitterSquare} /></a></Link>
					</div>
				</div>
        </footer>
    );
}
 
export default Footer;