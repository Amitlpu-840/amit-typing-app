import './App.css'
import Timer from './components/Timer';
import Words from './components/Words';



function App() {
  return (
    <div className="App">
      <header className="App-header text-3xl font-bold text-primary-500">
        <Words/>
        <Timer timeLeft={30} />
      </header>
    </div>
  );
}

export default App;
