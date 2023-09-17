import ButtonClearFilters from './ButtonClearFilters/ButtonClearFilters';
import NumericFilter from './NumericFilter/NumericFilter';
import RenderFilter from './RenderFilterText/RenderFilterText';

function Filters() {
  return (
    <div>
      <NumericFilter />
      <ButtonClearFilters />
      <RenderFilter />
    </div>
  );
}
export default Filters;
