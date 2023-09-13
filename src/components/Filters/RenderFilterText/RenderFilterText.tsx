import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function RenderFilter() {
  const { filters, removeFilter } = useContext(PlanetsContext);

  return filters.length > 0 && filters.map((filter) => (
    <p key={ filter.column } data-testid="filter">
      {`${filter.column} ${filter.comparison} ${filter.value}`}
      {' '}
      <button onClick={ () => removeFilter(filter.column) }>X</button>
    </p>
  ));
}

export default RenderFilter;
