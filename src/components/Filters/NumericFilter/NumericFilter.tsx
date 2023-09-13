function NumericFilter() {
  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <label>
        Column
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label>
        Operator
        <select data-testid="comparison-filter">
          <option value="maior-que">maior que</option>
          <option value="menor-que">menor que</option>
          <option value="igual-a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" />
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default NumericFilter;
