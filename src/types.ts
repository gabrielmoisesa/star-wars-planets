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
};

export type ErrorType = {
  message: string;
};

export type PlanetsContextType = {
  data: Array<PlanetType>;
  loading: boolean;
  error: null | unknown | ErrorType;
  filterName: (name: string) => void;
  filterNumeric: (
    column: keyof PlanetType,
    comparison: string,
    value: number
  ) => void;
  filterText: string;
};

export type ProviderProps = {
  children: React.ReactNode;
};
