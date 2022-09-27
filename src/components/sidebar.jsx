
import { BsStars } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";





let sidebar = () => {
        return (
            <div className='sideBar'>
                 <div className="sidebar_input">
                    <HiOutlineSearch  className="search_icon" />
                    <input type="text" placeholder="Search Twitter"  className="search_input" />
                </div>
                <div className="trends">
                    <div className="main">
                        <h4 className="for">Trends for you</h4>
                    </div>
                    <p className="country">Trend in Pakistan</p>
                    <h4 className="for">ISPR</h4>
                    <p className="country">200K</p>
                    <p className="country">Trend in Pakistan</p>
                    <h4 className="for">Ahmed Raza</h4>
                    <p className="country">6000K</p>
                    <p className="country">Trend in Pakistan</p>
                    <h4 className="for">Youtube IN Pakistan</h4>
                    <p className="country">2560K</p>
                </div>      

            </div>
        );
        }
export default sidebar;
