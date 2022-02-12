import logo from './logo.svg';
import './App.scss';
import SearchBar from './components/search-bar';

// this is a functional component
// returns a template
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />

      </header>
    </div>
  );
}

export default App;
