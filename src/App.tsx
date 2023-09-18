import './App.css';
import ButtonClearFilters from './components/ButtonClearFilters/ButtonClearFilters';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NameFilter from './components/NameFilter/NameFilter';
import NumericFilter from './components/NumericFilter/NumericFilter';
import RenderFilter from './components/RenderFilterText/RenderFilterText';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <NameFilter />
        <div className="filters-group">
          <NumericFilter />
          <Sort />
        </div>
        <ButtonClearFilters />
        <RenderFilter />
        <div className="table-container">
          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
