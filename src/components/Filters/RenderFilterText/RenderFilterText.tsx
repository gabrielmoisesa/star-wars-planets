import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function RenderFilter() {
  const { filters } = useContext(PlanetsContext);

  return filters.length > 0 && filters.map((filter) => (
    <p key={ filter.column }>
      {`${filter.column} ${filter.comparison} ${filter.value}`}
    </p>
  ));
}

export default RenderFilter;
