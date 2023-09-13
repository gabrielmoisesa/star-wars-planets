import { useEffect, useState } from 'react';
import { PlanetType, ProviderProps } from '../types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }: ProviderProps) {
  const { data, loading, error } = useFetch('https://swapi.dev/api/planets');
  const [filteredData, setFilteredData] = useState<PlanetType[]>(data);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterName = (name: string) => setFilteredData(
    data.filter((planet: PlanetType) => planet.name.includes(name)),
  );

  const filterNumeric: (
    column: keyof PlanetType,
    comparison: string,
    value: number
  ) => void = (column, comparison, value) => {
    setFilterText(`${column} ${comparison} ${value}`);
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

  const PlanetsData = {
    data: filteredData,
    loading,
    error,
    filterName,
    filterNumeric,
    filterText,
  };

  return (
    <PlanetsContext.Provider value={ PlanetsData }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
