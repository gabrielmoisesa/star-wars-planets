import ButtonClearFilters from './ButtonClearFilters/ButtonRemoveFilters';
import NameFilter from './NameFilter/NameFilter';
import NumericFilter from './NumericFilter/NumericFilter';
import RenderFilter from './RenderFilterText/RenderFilterText';
import './Filters.css';

function Filters() {
  return (
    <div className="filters-container">
      <NameFilter />
      <NumericFilter />
      <ButtonClearFilters />
      <RenderFilter />
    </div>
  );
}
export default Filters;
