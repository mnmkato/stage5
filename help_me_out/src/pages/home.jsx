import HomeNav from "../components/homeNav"
import Logo from "../components/logo"
import Hero from "../components/hero"
import Features from "../components/features"
import Steps from "../components/steps"
import Footer from "../components/footer"
function Home(params) {
    return(
        <>
        <header className="header">
            <Logo/>
            <HomeNav/>
            <a className="get-started">Get Started</a>
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