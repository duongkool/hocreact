import './App.scss';
import Header from './components/header/header';
const App = () => {
  return (
    <div className="app container">
      <Header />
      <div>
        test link
        <div>
          <button>to user page</button>
          <button>to admin page</button>
        </div>
      </div>
    </div>
  );
}

export default App;
