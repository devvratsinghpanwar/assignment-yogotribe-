
import FactDisplay from './components/factDisplay';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Random Fact Generator</h1>
      <FactDisplay />
    </div>
  );
}

export default App;