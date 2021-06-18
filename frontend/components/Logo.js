import MainLogo from '../public/logo/logo.png'
import FooterLogo from '../public/logo/logo-footer.png'
const Logo = (props) => {

    //Returning the logo according the parameter
    return ( 
        props.type === 'main-logo' ?  <img src={MainLogo.src} className="main-logo"></img> : <img src={FooterLogo.src} className="footer-logo"></img>
    );
}
 
export default Logo;