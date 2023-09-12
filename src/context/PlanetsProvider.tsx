import { ProviderProps } from '../types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }: ProviderProps) {
  const { data, loading, error } = useFetch('https://swapi.dev/api/planets');

  const PlanetsData = {
    data,
    loading,
    error,
  };

  return (
    <PlanetsContext.Provider value={ PlanetsData }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
