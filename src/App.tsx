import './App.css';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import NameFilter from './components/NameFilter/NameFilter';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <NameFilter />
        <div className="filters-group">
          <Filters />
          <Sort />
        </div>
        <div className="table-container">
          <Table />
        </div>
      </main>
    </div>
  );
}

export default App;
