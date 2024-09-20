import '../navbar/Navbar.css'
export default function Navbar(){
    return(
        <nav>
            <div className="left">
                <a href="#" className='logo'>
                    <img src="/" />
                    <span>Nestify</span>
                </a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Agents</a>
            </div>
            
            <div className="right">
                <a href='#' id="Signin-btn" className='btn'>
                    Sign in
                </a>
                <a href='#' id="Signup-btn" className='btn'>
                    SignUp
                </a>
            </div>
        </nav>
        );
}