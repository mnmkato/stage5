import icon1 from '../assets/icon 1.png'
import icon2 from '../assets/icon 2.png'
import icon3 from '../assets/icon 3.png'
import videoRepository from "../assets/Video Repository.png"

function Features() {
    return(
        <>
        <div className="features">
            <h3 className="section-heading">Features</h3>
            <p>Key Highlights of Our Extension</p>
            <div className="features-content">
            <div className="feature-item">
                        <img src={icon1} alt="" />
                        <div>
                        <h3 className="feature-heading">
                            Simple Screen Recording
                        </h3>
                        <p className="section-desc">
                            Effortless screen recording for everone. Record with ease. No tech expertise required.
                        </p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <img src={icon2} alt="" />
                       <div>
                       <h3 className="feature-heading">
                            Easy to share Url
                        </h3>
                        <p className="section-desc">
                            Share your recordings instantly with a single link. No attachments, no downloads.
                        </p>
                       </div>
                    </div>
                    <div className="feature-item">
                        <img src={icon3} alt="" />
                        <div>
                        <h3 className="feature-heading">
                            Revisit Recordings
                        </h3>
                        <p className="section-desc">
                            Access and review your past content effortlessly. Your recordings, always at your fingertips.
                        </p>
                        </div>
                    </div>
                <img className="videoRepository" src={videoRepository} alt="" />
            </div>
        </div>
        </>
    )
}
export default Features