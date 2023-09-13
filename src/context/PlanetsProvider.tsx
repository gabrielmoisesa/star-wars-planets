import { useEffect, useState } from 'react';
import { FilterType, PlanetType, ProviderProps } from '../types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }: ProviderProps) {
  const { data, loading, error } = useFetch('https://swapi.dev/api/planets');
  const [filteredData, setFilteredData] = useState<PlanetType[]>(data);
  const [filters, setFilters] = useState<FilterType[]>([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterNumeric = (
    column: keyof PlanetType,
    comparison: string,
    value: number,
  ) => {
    switch (comparison) {
      case 'maior que':
        setFilteredData(
          filteredData.filter((planet) => Number(planet[column]) > value),
        );
        break;
      case 'menor que':
        setFilteredData(
          filteredData.filter((planet) => Number(planet[column]) < value),
        );
        break;
      case 'igual a':
        setFilteredData(
          filteredData.filter((planet) => Number(planet[column]) === value),
        );
        break;
      default:
        throw new Error('Invalid comparison operator');
    }
  };

  const filterName = (name: string) => setFilteredData(
    data.filter((planet: PlanetType) => planet.name.includes(name)),
  );

  const saveFilter = (column: keyof PlanetType, comparison: string, value: number) => {
    setFilters([...filters, { column, comparison, value }]);
    filterNumeric(column, comparison, value);
  };

  const PlanetsData = {
    data: filteredData,
    loading,
    error,
    filters,
    saveFilter,
    filterName,
  };

  return (
    <PlanetsContext.Provider value={ PlanetsData }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
