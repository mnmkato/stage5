import Logo from "../components/logo"
import arrow from "../assets/arrow-down.png"
import profile from "../assets/profile-circle.png"
import search from "../assets/search-normal.png"
function RepoHeader() {
    return(
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
        </>
    )
}
export default RepoHeader