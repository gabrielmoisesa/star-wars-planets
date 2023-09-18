import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import './ButtonClearFilters.css';

function ButtonClearFilters() {
  const { clearFilters, filters } = useContext(PlanetsContext);

  return (
    filters.length > 0 && (
      <button
        onClick={ clearFilters }
        data-testid="button-remove-filters"
        className="button-clear-filters"
      >
        Remover filtros
      </button>
    )
  );
}

export default ButtonClearFilters;
