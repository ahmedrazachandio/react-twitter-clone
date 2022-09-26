import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'




let Menubar = ({ twitter, home, explore, Notifications, message , bookMarks, list, profile, more, profileButton }) => (
  <div className='MenuBar'>
      <img className='twitter' src={twitter} alt="twitter" />
        <br />
  </div>

    );








let MenuBars = () => (
  <div className='Menubar'>

    <Menubar
      twitter="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
      />
  </div>
)







ReactDOM.render(<MenuBars />, document.querySelector('#root'));