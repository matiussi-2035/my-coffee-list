import Logo from './Logo'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<nav className="navigation">
			<input type="checkbox" id="button-menu" className="button-menu"/>
			<label className="menu-icon" for="button-menu"><FontAwesomeIcon icon={faBars} size="2x" /></label>
					<ul className="menu">
						<li><Link href="/coffees"><a>My Coffees</a></Link></li>
						<li><Link href="/recipes"><a>My Recipes</a></Link></li>
						<li><Link href="/account"><a>Account</a></Link></li>
						<li><Link href="/about"><a>About</a></Link></li>
					</ul>
			</nav>
			<Logo type="main-logo"></Logo>
			<FontAwesomeIcon icon={faSearch} size="2x"/>
		</header>
	);
}

export default Header;