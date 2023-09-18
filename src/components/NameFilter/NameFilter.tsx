import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import './NameFilter.css';
import searchIcon from '../../assets/svgs/search-icon.svg';

function NameFilter() {
  const { filterName } = useContext(PlanetsContext);

  return (
    <div className="name-filter-container">
      <input
        type="text"
        onChange={ (event) => filterName(event.target.value) }
        data-testid="name-filter"
        className="name-filter"
      />
      <img src={ searchIcon } alt="Search Icon" className="search-icon" />
    </div>
  );
}

export default NameFilter;
