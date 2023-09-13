import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function NumericFilter() {
  const { filterNumeric } = useContext(PlanetsContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const column = event.target.column.value;
    const comparison = event.target.comparison.value;
    const value = Number(event.target.value.value);

    filterNumeric(column, comparison, value);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Column
        <select name="column" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label>
        Operator
        <select name="comparison" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" name="value" defaultValue={ 0 } data-testid="value-filter" />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default NumericFilter;
