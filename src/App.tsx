import './App.css';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Filters />
        <Sort />
        <Table />
      </main>
    </div>
  );
}

export default App;
