import { render, screen } from '@testing-library/react';
import App from '../App';
import PlanetsContext from '../context/PlanetsContext';
import { mockContextData, mockLoadingFalse, mockPlanetsData } from './mocks';


describe("Testa o componente <Table />", () => {
  test("Renderiza loading se loading estiver true", () => {
    render(
      <PlanetsContext.Provider value={mockLoadingFalse}>
        <App />
      </PlanetsContext.Provider>
    );

    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });
  test("Renderiza a tabela com dados quando loading for false", () => {
    render(
      <PlanetsContext.Provider value={mockContextData}>
        <App />
      </PlanetsContext.Provider>
    );

    mockPlanetsData.forEach((planet) => {
      expect(screen.getByText(planet.name)).toBeInTheDocument();
      expect(screen.getByText(planet.rotation_period)).toBeInTheDocument();
    });
  });
});

