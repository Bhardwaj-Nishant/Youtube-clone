import user1 from './images/user1.png'
import Header from './Header'
import { Link } from 'react-router-dom';
import videosJson from './useful-data-main/videos.json'
import {GoHomeFill} from 'react-icons/go'
import {BiSolidShoppingBag,BiPlusCircle} from 'react-icons/bi'
import {BiSolidVideos} from 'react-icons/bi'
import {MdSubscriptions,MdVideoLibrary,MdPodcasts} from 'react-icons/md'
import {FaClockRotateLeft,FaRegNewspaper} from 'react-icons/fa6'
import {BsFire,BsMusicNote} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {AiFillTrophy,AiOutlineBulb} from 'react-icons/ai'
import {PiFilmSlate} from 'react-icons/pi'
import {CiStreamOn} from 'react-icons/ci'

function VideoGrid(props){
    let myVideo = props.myVideo;
    return (
        <div class="thumbnail">
            <div class="video" >
            <Link to={`/video?id=${myVideo.id}`}><img src={myVideo.thumbnail.url} id='vd'width="100%"/></Link>
            </div>
            <div class="video-title">
                <div>
                        <img src={user1} height={'30px'} width={'30px'}></img>
                    
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">
                        {myVideo.title}
                    </h4>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.channelName}
                    </p>
                    <p class="margin-0 smaller-fontsize">
                        {myVideo.views} views . {myVideo.uploadedAt} ago</p>
                </div>
            </div>
        </div>
    );
}

function Home(){

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill/><span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button" >
                        <BiSolidVideos/><span class ="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <MdSubscriptions/><span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <MdVideoLibrary/><span class="side-button-label">You</span>
                    </button>
                    <button class="yt-side-button">
                        <FaClockRotateLeft/><span class="side-button-label">History</span>
                    </button>
                    <hr/>
                    <h4>&nbsp;&nbsp;&nbsp;Explore</h4>
                    <button class="yt-side-button">
                        <BsFire/><span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <BiSolidShoppingBag/><span class="side-button-label">Shopping</span>
                    </button>
                    <button class="yt-side-button">
                        <BsMusicNote/><span class="side-button-label">Music</span>
                    </button>
                    <button class="yt-side-button">
                        <PiFilmSlate/><span class="side-button-label">Movies</span>
                    </button>
                    <button class="yt-side-button">
                        <CiStreamOn/><span class="side-button-label">Live</span>
                    </button>
                    <button class="yt-side-button">
                        <SiYoutubegaming/><span class="side-button-label">Gaming</span>
                    </button>
                    <button class="yt-side-button">
                        <FaRegNewspaper/><span class="side-button-label">News</span>
                    </button>
                    <button class="yt-side-button">
                        <AiFillTrophy/><span class="side-button-label">Sports</span>
                    </button>
                    <button class="yt-side-button">
                        <AiOutlineBulb/><span class="side-button-label">Learning</span>
                    </button>
                    <button class="yt-side-button">
                        <MdPodcasts/><span class="side-button-label">podcasts</span>
                    </button>
                    <hr/>
                    <button class="yt-sidebutton">
                        <BiPlusCircle/><span class="side-button-label">Browse Channels</span>
                    </button>
                    <hr/>
                </div>
                <div class="main-right">
                <div id="upper-tags">
                    <button class="upper-tags">All</button>
                    <button class="upper-tags">Music</button>
                    <button class="upper-tags">One Piece</button>
                    <button class="upper-tags">Live</button>
                    <button class="upper-tags">Gadgets</button>
                    <button class="upper-tags">Podcasts</button>
                    <button class="upper-tags">Movies</button>
                    <button class="upper-tags">T-Series</button>
                    <button class="upper-tags">KSI</button> 
                    <button class="upper-tags">Comedy</button>
                    <button class="upper-tags">Recently Uploaded</button>
                    <button class="upper-tags">More...</button>
                </div> 
                    {videosJson.map((video) => {
                        return <VideoGrid myVideo={video}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
