import icon from '../assets/iCON.png'
import { Link } from 'react-router-dom'
function Logo() {
    return(
    <> 
    <Link to="/repo">
            <div className="logo">
                <img src={icon} alt="icon" />
                <h3 className='logo-text'>HelpMeOut</h3>
            </div>
    </Link>
    
    </>
    )
}
export default Logo