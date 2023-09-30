import Logo from "../components/logo"
import arrow from "../assets/arrow-down.png"
import profile from "../assets/profile-circle.png"
import { Link } from "react-router-dom"
import edit from "../assets/edit.png"
import copy from "../assets/copy.png"
import vidFrame1 from "../assets/video frame.png"
import fb from "../assets/fbShare.png"
import whatsapp from "../assets/whatsapp.png"
import telegram from "../assets/telegram.png"
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Video() {

    const {id} = useParams();  
    const [video_data, setVideo] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://example.com/video/${id}`, {
          params: {
            api_key: "",
          },
        })
        .then((response) => {
          setVideo(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, [id]);  
    
    // const video_data = {
    //     category:"Recent Videos",
    //     title:"How To Create A Facebook Ad Listing",
    //     Image:"",
    //     duration:"0:34",
    //     url:"https://www.helpmeout/Untitled_Video_20232509",
    //     transcript:[
    //         {
    //             timestamp:"0.01",
    //             text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
    //         },
    //         {
    //             timestamp:"0.15",
    //             text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
    //         },{
    //             timestamp:"0.30",
    //             text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
    //         },
    //         {
    //             timestamp:"1.0",
    //             text:'First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the'
    //         },
    //     ]
    // }
    return(
        <>
        <header className="repoHeader">
            <Logo />
            <div className="nav-profile">
                <img src={profile} alt="" />
                <p>John Mark</p>                    
                <img src={arrow} alt="" />
            </div>
        </header>
        <div className="video-content">
            <div className="breadcrumbs">
                <Link to={"/repo"}>Home</Link>
                <span> / <Link>{video_data.category}</Link></span>
                <span> / <Link>{video_data.title}</Link></span>
            </div>
            <div className="topBar">
                <h1>{video_data.title}</h1>
                <img src={edit} alt="" />
            </div>
            <div className="videoFrame">
                <img src={vidFrame1} alt="" />
                <span>{video_data.duration}</span>
            </div>
            <div className="vid-share">
                <div className="vid-share-top"> 
                    <div className="emailShare">
                        <input type="email" name="email" id="email" placeholder="enter email of receiver"/>
                        <button>Send</button>
                    </div>
                    <div className="urlShare">
                        <p>{video_data.url}</p>
                        <div>
                            <img src={copy} alt="" />
                            <span>Copy URL</span>
                        </div>
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
        </>
    )
}
export default Video