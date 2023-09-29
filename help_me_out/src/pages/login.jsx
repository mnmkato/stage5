import Logo from "../components/logo"
import google from "../assets/Google.svg"
import fb from "../assets/Facebook.svg"
function Login() {
    return(
        <>
         <header className="header">
           <Logo />
        </header>
        <div className="login-container">
        <div className="login-content">
            <h1>Log in or Sign up</h1>
            <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
            <div className="socialLogin">
                <img src={google} alt="" />
                <p>Continue with Google</p>
            </div>
            <div className="socialLogin">
                <img src={fb} alt="" />
                <p>Continue with Facebook</p>
            </div>
            <div>or</div>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email address"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="pasword" placeholder="Enter your Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
        </>
    )
}
export default Login