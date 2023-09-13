import { useEffect, useState } from 'react';
import { PlanetType, ProviderProps } from '../types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }: ProviderProps) {
  const { data, loading, error } = useFetch('https://swapi.dev/api/planets');
  const [filteredData, setFilteredData] = useState<PlanetType[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterName = (name: string) => setFilteredData(
    data.filter((planet: PlanetType) => planet.name.includes(name)),
  );

  const PlanetsData = {
    data: filteredData,
    loading,
    error,
    filterName,
  };

  return (
    <PlanetsContext.Provider value={ PlanetsData }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
