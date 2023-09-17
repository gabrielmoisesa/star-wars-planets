import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';
import './NumericFilter.css';

export const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function NumericFilter() {
  const { saveFilter, filters } = useContext(PlanetsContext);

  const filteredColumns = columns.filter(
    (column) => !filters.some((filter) => filter.column === column),
  );

  const handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void = (
    event,
  ) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    const column = target.column.value;
    const comparison = target.comparison.value;
    const value = Number(target.value.value);

    saveFilter(column, comparison, value);
  };

  return (
    <form onSubmit={ handleSubmit } className="numeric-filter-form">
      <label>
        Column
        <select name="column" data-testid="column-filter">
          {filteredColumns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
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
