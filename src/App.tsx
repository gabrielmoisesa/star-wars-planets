import './App.css';
import Filters from './components/Filters/Filters';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <h1>STARWARS</h1>
      <main className="main-content">
        <Filters />
        <Sort />
        <Table />
      </main>
    </div>
  );
}

export default App;
