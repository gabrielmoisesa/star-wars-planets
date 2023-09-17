import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import './RenderFilterText.css';

function RenderFilter() {
  const { filters, removeFilter } = useContext(PlanetsContext);

  return filters.length > 0 && (
    <div className="render-filters-container">
      {filters.map((filter) => (
        <p key={ filter.column } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          {' '}
          <button onClick={ () => removeFilter(filter.column) }>X</button>
        </p>
      ))}
    </div>
  );
}

export default RenderFilter;
