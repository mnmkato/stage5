import HomeNav from "../components/homeNav"
import Logo from "../components/logo"
import { Link } from "react-router-dom"
import edit from "../assets/edit.png"
import copy from "../assets/copy.png"
import vidFrame1 from "../assets/video frame.png"
import fb from "../assets/fbShare.png"
import whatsapp from "../assets/whatsapp.png"
import telegram from "../assets/telegram.png"
import Footer from "../components/footer"

import play from "../assets/play.png"
import volume from "../assets/volume.png"
import settings from "../assets/settings.png"


function VideoPreview() {
    const video_data = {
        category:"Recent Videos",
        title:"Untitled_Video_20232509",
        Image:"",
        duration:"0:34",
        url:"https://www.helpmeout/Untitled_Video_20232509",
        transcript:[
            {
                timestamp:"0.01",
                text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
            },
            {
                timestamp:"0.15",
                text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
            },{
                timestamp:"0.30",
                text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
            },
            {
                timestamp:"1.0",
                text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
            },
        ]
    }
    return(
        <>
         <header className="header">
            <Logo/>
            <HomeNav/>
            <Link to="/login">
            <div className="get-started">Get Started</div>
            </Link>
        </header>
        <div className="vidPreview-container">
            <div className="vidPreview-content">
                <div>
                <h1>Your video is ready!</h1>
                <div className="vidPreview-title">
                    <h3>Name</h3>
                    <div className="topBar">
                    <h1>{video_data.title}</h1>
                    <img src={edit} alt="" />
                </div>
                <div className="emailShare">
                    <input type="email" name="email" id="email" placeholder="enter email of receiver"/>
                    <button>Send</button>
                </div>
                <h2 className="urlShare-title">Video URL</h2>
                <div className="urlShare">
                    <p>{video_data.url}</p>
                    <div>
                        <img src={copy} alt="" />
                        <span>Copy URL</span>
                    </div>
                </div>
                <div className="vid-share-bottom">
                    <h2>Share Your Video</h2>
                    <div className="socialShare">
                        <div>
                            <img src={fb} alt="" />
                            <p>Facebook</p>
                        </div>
                        <div>
                            <img src={whatsapp} alt="" />
                            <p>Whatsapp</p>
                        </div>
                        <div>
                            <img src={telegram} alt="" />
                            <p>Telegram</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    <div className="player">
                        <div className="videoFrame">
                            <img src={vidFrame1} alt="" />
                        </div>
                        <div className="seekbar"></div>
                        <div className="player-controls">
                            <span>{video_data.duration} / {video_data.duration}</span>
                            <div className="player-controls-grid">
                                <div>
                                    <img src={play} alt="" />
                                    <p>Play</p>
                                </div>
                                <div>
                                    <img src={volume} alt="" />
                                    <p>Volume</p>
                                </div>
                                <div>
                                    <img src={settings} alt="" />
                                    <p>Settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transcript">
                        <div className="transcript-header">
                            <h3>Transcript</h3>
                            <select value="language">
                                <option value="eng">English</option>
                            </select>
                        </div>
                        <div className="transcript-content">
                            {video_data.transcript.map(item => (
                                <div>
                                    <div className="timestamp">{item.timestamp}</div>
                                    <div className="transcript-text">{item.text}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <h3>To ensure the availability and privacy of your video, we recommend saving it to your account.</h3>
                <button>Save Video</button>
                <p>Don’t have an account? <Link>Create account</Link></p>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export default VideoPreview