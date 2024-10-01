import NavbarCss from '../navbar/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`${NavbarCss.nav}`}>
            <div className={`${NavbarCss.left}`}>
                <a href="/" className={`${NavbarCss.logo}`}>
                    <img src="/logo.png" className={`${NavbarCss.logoImg}`} alt="Logo" />
                </a>
                <a href="/" className={`${NavbarCss.navLink} ${NavbarCss.scaletrans}`}>Home</a>
                <a href="/about" className={`${NavbarCss.navLink} ${NavbarCss.scaletrans}`}>About</a>
                <a href="/contact" className={`${NavbarCss.navLink} ${NavbarCss.scaletrans}`}>Contact</a>
                <a href="/agents" className={`${NavbarCss.navLink} ${NavbarCss.scaletrans}`}>Agents</a>
            </div>

            <div className={`${NavbarCss.right}`}>
                <a href="#" className={` ${NavbarCss.scaletrans} ${NavbarCss.Signinbtn}`}>
                    Sign in
                </a>
                <a href="#" className={`${NavbarCss.Signupbtn} ${NavbarCss.scaletrans}`}>
                    Sign up
                </a>
            </div>
        </nav>
    );
}
