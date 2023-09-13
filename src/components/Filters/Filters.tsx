import ButtonClearFilters from './ButtonClearFilters/ButtonRemoveFilters';
import NameFilter from './NameFilter/NameFilter';
import NumericFilter from './NumericFilter/NumericFilter';
import RenderFilter from './RenderFilterText/RenderFilterText';

function Filters() {
  return (
    <div>
      <NameFilter />
      <NumericFilter />
      <ButtonClearFilters />
      <RenderFilter />
    </div>
  );
}
export default Filters;
