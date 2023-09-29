import HomeNav from "../components/homeNav"
import Logo from "../components/logo"
import Hero from "../components/hero"
import Features from "../components/features"
import Steps from "../components/steps"
import Footer from "../components/footer"
import { Link } from 'react-router-dom';
function Home(params) {
    return(
        <>
        <header className="header">
            <Logo/>
            <HomeNav/>
            <Link to="/login">
            <div className="get-started">Get Started</div>
            </Link>
        </header>
        <Hero/>
        <div className="divider" />
        <Features/>
        <div className="divider" />
        <Steps/>
        <Footer/>
        </>
        )
}
export default Home