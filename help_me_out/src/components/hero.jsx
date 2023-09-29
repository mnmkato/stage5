import gridleft from "../assets/grid.left.svg"
import gridright from "../assets/grid.right.svg"
import img1 from "../assets/woman-using-smartphone-technology 2.png"
import img2 from "../assets/AdobeStock_400053098 1.png"
import img3 from "../assets/AdobeStock_362497671 1.png"

function Hero() {
    return(
        <>
         <div className="hero">
            <div className="hero-content">
                <h1>Show Them<br/>Don't Just Tell</h1>
                <p>Help yoour friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                <a href="#" className="cta-button">Install HelpMeOut &rarr;</a>
            </div>
            <div className="image-grid">
                <div className="image-container gridleft">
                <img src={gridleft} className=""/>
                </div>
                <div className="image-container gridright">
                <img src={gridright} className=""/>
                </div>
                <div className="image-container Image1">
                <img src={img1} className="" alt="Image 1"/>
                </div>
                <div className="image-container Image2">
                <img src={img2} className="" alt="Image 2"/>
                </div>
                <div className="image-container Image3">
                <img src={img3} className="" alt="Image 3"/>
                </div>
                
               
            </div>
        </div>
        </>
    )
}
export default Hero