import Logo from "../components/logo"
import arrow from "../assets/arrow-down.png"
import profile from "../assets/profile-circle.png"
import search from "../assets/search-normal.png"
import vidFrame1 from "../assets/video frame.png"
import link from "../assets/link.png"
import more from "../assets/more.png"
import { Link } from "react-router-dom"

function Repo(params) {
    const data = [
        {
            category: "Recent Files",
            repos: [
                {
                    id:2,
                    img: "",
                    duration: "00:34",
                    title: "How to create Facebook Ad listing",
                    date: "SEPTEMBER 23, 2023"
                },
                {
                    id:2,
                    img: "",
                    duration: "00:34",
                    title: "How to create Facebook Ad listing",
                    date: "SEPTEMBER 23, 2023"
                }
            ]
        },
        {
            category: "Files from last week",
            repos: [
                {
                    id:3,
                    img: "",
                    duration: "00:34",
                    title: "How to create Facebook Ad listing",
                    date: "SEPTEMBER 23, 2023"
                },
                {
                    id:4,
                    img: "",
                    duration: "00:34",
                    title: "How to create Facebook Ad listing",
                    date: "SEPTEMBER 23, 2023"
                },
            ]
        }
    ]
    return (
        <>
            <header className="repoHeader">
                <Logo />
                <div className="nav-profile">
                    <img src={profile} alt="" />
                    <p>John Mark</p>
                    <img src={arrow} alt="" />
                </div>
                <div className="salutation">
                    <h1>Hello, John Mark</h1>
                    <p>Here are your recorded videos</p>
                </div>
                <div className="searchBar">
                    <img src={search} alt="" />
                    <input type="search" name="search" id="search" placeholder="Search for a particular video" />
                </div>
            </header>
            <div className="repo-content">
                {data.map((category) => (
                    <div className="repo-category" key={category.category}>
                        <h4 className="category-name">{category.category}</h4>
                        <div className="video-grid">
                            {category.repos.map((repo) => (
                                <Link to={`/video/${repo.id}`}>
                                     <div className="video-grid-item" key={repo.title}>
                                    <div className="videoFrame">
                                        <img src={vidFrame1} alt="" />
                                        <span>{repo.duration}</span>
                                    </div>
                                    <div className="videoDetails">
                                        <div>
                                        <h3>{repo.title}</h3>
                                        <p>{repo.date}</p>
                                        </div>
                                        <div>
                                        <img src={link} alt="" />
                                        <img src={more} alt="" />
                                        </div>
                                    </div>
                                </div>
                                </Link>
                               
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Repo
