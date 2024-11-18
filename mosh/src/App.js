import logo from './logo.svg';
import './App.css';
import List from './list'

function App() {
  const list=['appel','orange','banana']
  return (
    <div className="App">
      <List  item={list}/>
    </div>
  );
}

export default App;
