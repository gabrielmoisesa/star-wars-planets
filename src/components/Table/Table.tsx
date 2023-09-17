import { useContext } from 'react';
import { PlanetType } from '../../types';
import './Table.css';
import PlanetsContext from '../../context/PlanetsContext';

function Table() {
  const { data, loading } = useContext(PlanetsContext);

  const tableHeaders = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',

  ];

  const planetKeys = tableHeaders.map((header) => header.toLowerCase().replace(/\s+/g, '_'));

  const renderPlanetData = (planet: PlanetType, key: string) => {
    switch (key) {
      case 'name':
        return (
          <td key={ key } data-testid="planet-name">
            {planet[key]}
          </td>
        );
      case 'films':
        return (
          <td key={ key } className="films-td">
            {`https://swapi.dev/api/films/1-${planet[key].length}/`}
          </td>
        );
      default:
        return (
          <td key={ key }>{planet[key]}</td>
        );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (header === 'Films' ? (
            <th key={ header } className="films-th">{header}</th>
          ) : (
            <th key={ header }>{header}</th>
          )))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td>Loading...</td>
          </tr>
        ) : (
          data.map((planet: PlanetType) => (
            <tr key={ planet.name }>
              {planetKeys.map((key) => renderPlanetData(planet, key))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
