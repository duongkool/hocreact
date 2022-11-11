import './App.scss';
import Header from './components/header/header';
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app container">
      <Header />
      <div>
        test link
        <div>
          <button>  <Link to="/users">to user page</Link></button>
          <button>  <Link to="/admins">to admin page</Link></button>
        </div>
      </div>
    </div>
  );
}

export default App;
