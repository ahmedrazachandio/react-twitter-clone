import { render } from "@testing-library/react";
// import "./../style.css"
// import './../App.css';






let Posts = () =>{
    return(
        <div className="post">
            <img src="https://avatars.githubusercontent.com/u/86877851?s=400&u=29c92d79043f506ee35a390b12953fd998b5402a&v=4"
             className="post_profile" alt="profile_photo" />
            <h1>محمد</h1> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
                 pariatur, nemo dolore distinctio omnis veniam dolorum provident voluptas,
                  sint, aut rem sit facere ab officia non maiores ea. Error, molestiae!</p>
        </div>

    );

}


export default Posts;
