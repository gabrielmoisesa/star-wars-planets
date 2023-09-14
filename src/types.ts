export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
  [key: string]: any;
};

export type ErrorType = {
  message: string;
};

export type FilterType = {
  column: keyof PlanetType;
  comparison: string;
  value: number;
};

export type PlanetsContextType = {
  data: Array<PlanetType>;
  loading: boolean;
  error: null | unknown | ErrorType;
  filters: FilterType[];
  saveFilter: (column: keyof PlanetType, comparison: string, value: number) => void;
  filterName: (name: string) => void;
  removeFilter: (column: keyof PlanetType) => void;
  clearFilters: () => void;
  sortPlanets: (column: string, sortOrder: 'ASC' | 'DESC') => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type SortType = 'ASC' | 'DESC';
