import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function ButtonClearFilters() {
  const { clearFilters } = useContext(PlanetsContext);

  return (
    <button onClick={ clearFilters } data-testid="button-remove-filters">
      Remover filtros
    </button>
  );
}

export default ButtonClearFilters;
