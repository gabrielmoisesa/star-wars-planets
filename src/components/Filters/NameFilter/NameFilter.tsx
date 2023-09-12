import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function NameFilter() {
  const { filterName } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      onChange={ (event) => filterName(event.target.value) }
      data-testid="name-filter"
    />
  );
}

export default NameFilter;
