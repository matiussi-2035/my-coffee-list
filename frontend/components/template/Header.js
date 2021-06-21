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
            <label className="menu-icon" for="button-menu">
            <span></span>   
            <span></span>   
            <span></span>
            </label>
            
               <ul className="menu">
                  <li><Link href="/coffees"><a className="menu-item">My Coffees</a></Link></li>
                  <li><Link href="/recipes"><a className="menu-item">My Recipes</a></Link></li>
                  <li><Link href="/account"><a className="menu-item">Account</a></Link></li>
                  <li><Link href="/about"><a className="menu-item">About</a></Link></li>
               </ul>
			</nav>
			<Logo type="main-logo"></Logo>
			<span className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="2x"/>
         </span>
		</header>
	);
}

export default Header;