import iconWhite from "../assets/iCONwhite.png"
function Footer() {
    return(
        <>
        <footer>
        <div className="logo">
            <img src={iconWhite} alt="icon" />
            <h3 className="footer-logo-text">HelpMeOut</h3>
        </div>
            <div className="menu">
                <h4 className="menu-header">Menu</h4>    
                <a href="" className="menu-link">Home</a>
                <a href="" className="menu-link">Converter</a>
                <a href="" className="menu-link">How it Works</a>
            </div>
            <div className="menu">
                <h4 className="menu-header">About us</h4>    
                <a href="" className="menu-link">About</a>
                <a href="" className="menu-link">Contact Us</a>
                <a href="" className="menu-link">Privacy Policy</a>
            </div>
            <div className="menu">
                <h4 className="menu-header">Screen Record</h4>    
                <a href="" className="menu-link">Browser Window</a>
                <a href="" className="menu-link">Desktop</a>
                <a href="" className="menu-link">Application</a>
            </div>    
        </footer>
        </>
    )
}
export default Footer