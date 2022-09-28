import Posts from './posts';

// import { BsStars } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import { GrEmoji } from "react-icons/gr";
import { BsCalendarCheckFill } from "react-icons/bs";







let Content = () => {
        return (
            <div className='content'>
                <div className="home">
                    <h2>Home</h2>
                </div>
                <div className="home2">
                    <img src="https://avatars.githubusercontent.com/u/86877851?s=400&u=29c92d79043f506ee35a390b12953fd998b5402a&v=4" className="profile_photo" alt="profile_photo" />
                   <input type="text" placeholder=" What's Happening ?"  className="input_profile" />
                    {/* <h2>Ahmed Raza</h2> */}
                </div>
                <div className="icon_profile">
                    <div className="cover">
                        <FaRegImage  className="cover_icons"/>
                        <CgMenuBoxed  className="cover_icons"/>
                        <GrEmoji  className="cover_icons"/>
                        <BsCalendarCheckFill  className="cover_icons"/>
                    </div>    
                    <div className="btn_profile">
                        <button className="button_profile">Tweet</button>
                    </div>
                </div>
                <Posts />            
            </div>
        );
        }
export default Content;
