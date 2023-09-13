export const mockPlanetsData = [
  {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/",
    ],
    created: "2014-12-09T13:50:49.641000Z",
    edited: "2014-12-20T20:58:18.411000Z",
    url: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Yavin IV",
    rotation_period: "24",
    orbital_period: "4818",
    diameter: "10200",
    climate: "temperate, tropical",
    gravity: "1 standard",
    terrain: "jungle, rainforests",
    surface_water: "8",
    population: "1000",
    residents: [],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-10T11:37:19.144000Z",
    edited: "2014-12-20T20:58:18.421000Z",
    url: "https://swapi.dev/api/planets/3/",
  },
];

export const mockContextData = {
  data: mockPlanetsData,
  loading: false,
  error: null,
  filterName: () => {},
  filterNumeric: () => {},
  filterText: "",
};

export const mockLoadingFalse = {
  data: [],
  loading: true,
  error: null,
  filterName: () => {},
  filterNumeric: () => {},
  filterText: "",
};
