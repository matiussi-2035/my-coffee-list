import MainLogo from '../../public/logo/logo.png'
import FooterLogo from '../../public/logo/logo-footer.png'
import Link from 'next/link'
const Logo = (props) => {

    //Returning the logo according the parameter
    return ( 
        props.type === 'main-logo' ?  
         <Link href="/"><a><img src={MainLogo.src} className="main-logo" /></a></Link> : 
         <Link href="/"><a><img src={FooterLogo.src} className="footer-logo"/></a></Link>
    );
}
 
export default Logo;