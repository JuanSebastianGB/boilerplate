import { useSelector } from 'react-redux';
import './App.css';
import { AppStore, User } from './models';
import { Home } from './pages';

function App() {
  const userState = useSelector((store: AppStore): User => store.user);
  return (
    <div className="App">
      <pre>{JSON.stringify(userState)}</pre>
      <Home />
    </div>
  );
}

export default App;
