import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';
import "./index.css";
import moment from 'moment';

const App = () => {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

       <Menubar />
       <Content />
       <Sidebar />
    </div>
  );
}

export default App;

















ReactDOM.render(<Menubar />, document.querySelector('#root'));