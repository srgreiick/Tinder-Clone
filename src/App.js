
import './App.css';
import Header from './Header';
import TinderCard from './TinderCards.js';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
    <Header />
    <TinderCard/>
    {/* Swipe Buttons */}
    </div>
  );
}

export default App;
