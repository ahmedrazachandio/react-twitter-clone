// import Posts from './post';
// import { BsStars } from "react-icons/bs";
// import { FaRegImage } from "react-icons/bs";






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
                    <div className="icon_profile">
                        {/* <FaRegImage /> */}
                    </div>
                </div>
            
            </div>
        );
        }
export default Content;
