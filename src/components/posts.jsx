import { render } from "@testing-library/react";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
// import "./../style.css"
// import './../App.css';






let Posts = () =>{
    return(
        <div className="post">
            <img src="https://avatars.githubusercontent.com/u/86877851?s=400&u=29c92d79043f506ee35a390b12953fd998b5402a&v=4"
             className="post_profile" alt="profile_photo" />
            <span className="userName">Ahmed Raza</span> 
				<IoPersonOutline className='verify' /> 
            <span className="lightName">@AhmedRaza</span> 
            <p className="postText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                 pariatur, nemo dolore distinctio omnis veniam dolorum provident voluptas,
                  sint, aut rem sit facere ab officia non maiores ea. Error, molestiae!</p>
                  <img src="https://avatars.githubusercontent.com/u/86877851?s=400&u=29c92d79043f506ee35a390b12953fd998b5402a&v=4" className="post_photos" alt="post_content_photo" />
                  <div className="actionBtn">
				    <i><FaRegComment /></i>
				    <i className="share_icon"><AiOutlineRetweet /></i>
				    <i className="share_icon"><IoHeartOutline /></i>
				    <i className="share_icon"><FiShare /></i>
			    </div>
        </div>

    );

}


export default Posts;
