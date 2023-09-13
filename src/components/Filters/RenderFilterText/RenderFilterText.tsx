import { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

function RenderFilter() {
  const { filterText } = useContext(PlanetsContext);

  return filterText.length > 0 && <p>{filterText}</p>;
}

export default RenderFilter;
