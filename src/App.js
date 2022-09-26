import logo from './logo.svg';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Menubar from './components/menubar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menubar />
       <Content />
       {/* <Sidebar /> */}
    </div>
  );
}

export default App;
