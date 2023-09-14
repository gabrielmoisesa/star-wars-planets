import { columns } from '../Filters/NumericFilter/NumericFilter';

function Sort() {
  return (
    <div>
      <label>
        Ordenar
        <select>
          {columns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Sort;
