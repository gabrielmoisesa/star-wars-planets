import { useEffect, useState } from 'react';
import { FilterType, PlanetType, ProviderProps, SortType } from '../types';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }: ProviderProps) {
  const { data, loading, error } = useFetch('https://swapi.dev/api/planets');
  const [filteredData, setFilteredData] = useState<PlanetType[]>(data);
  const [filters, setFilters] = useState<FilterType[]>([]);

  useEffect(() => {
    let filteredPlanets = data;

    filters.forEach((filter) => {
      filteredPlanets = filteredPlanets.filter((planet: PlanetType) => {
        return filterNumeric(filter.column, filter.comparison, filter.value, planet);
      });
    });

    setFilteredData(filteredPlanets);
  }, [data, filters]);

  const filterNumeric = (
    column: keyof PlanetType,
    comparison: string,
    value: number,
    planet: PlanetType,
  ) => {
    switch (comparison) {
      case 'greater than':
        return Number(planet[column]) > value;
      case 'less than':
        return Number(planet[column]) < value;
      case 'equal to':
        return Number(planet[column]) === value;
      default:
        throw new Error('Invalid comparison operator');
    }
  };

  const filterName = (name: string) => setFilteredData(
    data.filter((planet: PlanetType) => planet.name.includes(name)),
  );

  const saveFilter = (column: keyof PlanetType, comparison: string, value: number) => {
    setFilters([...filters, { column, comparison, value }]);
  };

  const removeFilter = (column: keyof PlanetType) => {
    const updatedFilters = filters.filter((filter) => filter.column !== column);
    setFilters(updatedFilters);
  };

  const clearFilters = () => {
    setFilters([]);
    setFilteredData(data);
  };

  const sortPlanets = (column: string, sortOrder: SortType) => {
    setFilteredData((prevData) => {
      const numSort = sortOrder === 'ASC' ? 1 : -1;

      return [...prevData].sort((a, b) => {
        const valueA = a[column] === 'unknown'
          ? Number.MAX_SAFE_INTEGER * numSort
          : parseFloat(a[column]);
        const valueB = b[column] === 'unknown'
          ? Number.MAX_SAFE_INTEGER * numSort
          : parseFloat(b[column]);

        if (valueA === valueB) return 0;
        return valueA < valueB ? -numSort : numSort;
      });
    });
  };

  const PlanetsData = {
    data: filteredData,
    loading,
    error,
    filters,
    saveFilter,
    filterName,
    removeFilter,
    clearFilters,
    sortPlanets,
  };

  return (
    <PlanetsContext.Provider value={ PlanetsData }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
