import rec from "../assets/rec.svg"
function Steps() {
    return(
        <>
         <div className="steps">
            <h3 className="section-heading">How it Works</h3>
            <div className="steps-grid">
                <div className="step-item">
                    <div>1</div>
                    <h5>Record Screen</h5>
                    <p className="section-desc">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                    <img src={rec} alt="" />
                </div>
                <div className="step-item">
                    <div>2</div>
                    <h5>Record Screen</h5>
                    <p className="section-desc">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                    <img src={rec} alt="" />
                </div>
                <div className="step-item">
                    <div>3</div>
                    <h5>Record Screen</h5>
                    <p className="section-desc">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                    <img src={rec} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Steps