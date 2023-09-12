import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function NameFilter() {
  const { filterName } = useContext(PlanetsContext);

  const handleNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterName(event.target.value);
  };

  return (
    <input type="text" onChange={ handleNameFilter } data-testid="name-filter" />
  );
}

export default NameFilter;
