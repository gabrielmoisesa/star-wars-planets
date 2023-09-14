import './App.css';
import Filters from './components/Filters/Filters';
import Sort from './components/Sort/Sort';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <Sort />
      <Filters />
      <Table />
    </>
  );
}

export default App;
