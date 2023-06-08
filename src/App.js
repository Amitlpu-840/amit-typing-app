import './App.css'
import {faker} from '@faker-js/faker'

const words = faker.random.words(10);

function App() {
  return (
    <div className="App">
      <header className="App-header text-3xl font-bold text-primary-500">
        {words}
      </header>
    </div>
  );
}

export default App;
