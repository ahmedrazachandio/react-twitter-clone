import { FaTwitter } from 'react-icons/fa';
import { RiHomeHeartFill, RiHashtag } from "react-icons/ri";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";





let Menubar = () => {
        return (
            <div className='MenuBars'>
               <ul>
				<li className='FaTwitter1'><FaTwitter /></li>
				<li className='FaTwitter'><RiHomeHeartFill /> Home</li>
				<li className='FaTwitter'><RiHashtag /> Explore</li>
				<li className='FaTwitter'><BsPeople /> Communities</li>
				<li className='FaTwitter'><IoNotificationsOutline /> Notifications</li >
				<li className='FaTwitter'><HiOutlineMail /> Messages</li >
				<li className='FaTwitter'><BsBookmark /> Bookmarks</li >
				<li className='FaTwitter'><IoPersonOutline /> Profile</li >
				<li className='FaTwitter'><CgMoreO /> More</li >
				<li className="tweetBtn" > Profile</li>
			</ul >
            </div>

);
  
}


export default Menubar;
