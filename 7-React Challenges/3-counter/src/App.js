import Counter from './components/Counter';
import CounterTS from './components/CounterTS.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter value="0" />
        <CounterTS value={0} />
      </header>
    </div>
  );
}

export default App;


