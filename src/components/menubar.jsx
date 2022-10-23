import { FaTwitter } from 'react-icons/fa';
import { RiHomeHeartFill, RiHashtag } from "react-icons/ri";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";





let Menubar = () => {
        return (
            <div className='MenuBars position'>
               <ul>
				<li className='FaTwitter extraHieght'><FaTwitter className='icon1' /></li>
				<li className='FaTwitter'><RiHomeHeartFill className='icon' /> Home</li>
				<li className='FaTwitter'><RiHashtag className='icon' /> Explore</li>
				<li className='FaTwitter'><BsPeople className='icon' /> Communities</li>
				<li className='FaTwitter'><IoNotificationsOutline className='icon' /> Notifications</li >
				<li className='FaTwitter'><HiOutlineMail className='icon' /> Messages</li >
				<li className='FaTwitter'><BsBookmark className='icon' /> Bookmarks</li >
				<li className='FaTwitter'><IoPersonOutline className='icon' /> Profile</li >
				<li className='FaTwitter'><CgMoreO className='icon' /> More</li >
			</ul >
				<span className="tweetBtn" > Profile</span>
            </div>

);
  
}


export default Menubar;
