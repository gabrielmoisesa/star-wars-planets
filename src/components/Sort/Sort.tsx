import { useContext, useState } from 'react';
import { columns } from '../NumericFilter/NumericFilter';
import PlanetsContext from '../../context/PlanetsContext';
import { SortType } from '../../types';
import './Sort.css';

function Sort() {
  const { sortPlanets } = useContext(PlanetsContext);
  const [selectedColumn, setSelectedColumn] = useState(columns[0]);
  const [selectedSortOrder, setSelectedSortOrder] = useState<SortType>('ASC');

  const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColumn(event.target.value);
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedSortOrder(value as SortType);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sortPlanets(selectedColumn, selectedSortOrder);
  };

  return (
    <form onSubmit={ handleSubmit } className="sort-form">
      <label>
        Sort by
        <select
          data-testid="column-sort"
          onChange={ handleColumnChange }
          value={ selectedColumn }
        >
          {columns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </label>
      <div className="sort-radios-container">
        <label className="asc-radio-label">
          <input
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleSortOrderChange }
            checked={ selectedSortOrder === 'ASC' }
          />
          Ascendente
        </label>
        <label>
          <input
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ handleSortOrderChange }
            checked={ selectedSortOrder === 'DESC' }
          />
          Descendente
        </label>
      </div>
      <button type="submit" data-testid="column-sort-button">
        Sort
      </button>
    </form>
  );
}

export default Sort;
