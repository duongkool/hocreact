import './App.scss'
import Header from './components/header/header';
import { Outlet, Link } from "react-router-dom";
const App = () => { 
  return (
    <div className="app-container">
      <div className='header-container'>       
        <Header />
      </div>      
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-conten'>
          <Outlet />
        </div>
      </div>      
    </div>
  );
}

export default App;
