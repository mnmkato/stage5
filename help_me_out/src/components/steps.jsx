import rec from "../assets/rec.svg"
function Steps() {
    return(
        <>
         <div className="steps">
            <h3 className="section-heading">How it Works</h3>
            <div className="steps-grid">
                <div className="step-item">
                    <div className="step-icon">1</div>
                    <h5>Record Screen</h5>
                    <p className="section-desc">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                    <div className="image-container">
                    <img src={rec} alt="" />
                    </div>
                </div>
                <div className="step-item">
                    <div className="step-icon">2</div>
                    <h5>Share Your Recording</h5>
                    <p className="section-desc">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                    <div className="image-container">
                    <img src={rec} alt="" />
                    </div>
                </div>
                <div className="step-item">
                    <div className="step-icon">3</div>
                    <h5>Learn Effortlessly</h5>
                    <p className="section-desc">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                    <div className="image-container">
                    <img src={rec} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Steps