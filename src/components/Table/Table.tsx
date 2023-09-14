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

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={ header }>{header}</th>
          ))}
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
              {planetKeys.map((key) => (key === 'name' ? (
                <td key={ key } data-testid="planet-name">
                  {planet[key]}
                </td>
              ) : (
                <td key={ key }>{planet[key]}</td>
              )))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
