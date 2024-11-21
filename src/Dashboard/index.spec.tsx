import { faker } from "@faker-js/faker";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "./index";
import { fetchPokemonList } from "../services/PokemonService";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "pikashu",
        image: faker.image.urlPlaceholder(),
        type: "Eletrico",
      },
      {
        id: 2,
        name: "Charmander",
        image: faker.image.urlPlaceholder(),
        type: "Fogo",
      },
    ];
});

const navigateMock = vi.fn();

describe("Test component Login", () => {

    vi.mock("react-router-dom", () => {
      return {
        useNavigate() {
          return navigateMock;
        },
      };
    });

    test("Deve tener un título escrito 'Sign In'", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
    
        const title = await screen.findByRole("heading", {
          name: "Dashboard",
        });
    
        expect(title).toBeInTheDocument();
    });

    test("Deve tener uma lista com 2 pokemons", async () => {
      render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
  
      const items = await screen.findAllByRole("listitem");
  
      expect(items).toHaveLength(2);
    });

    test("Debe tener un pikashu en la lista", async () => {
      render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
  
      const pikashu = await screen.findByText("pikashu");
      expect(pikashu).toBeInTheDocument();
    });

    test("Debe tener un item a clickear en un li para ver la lista de detalles", async () => {
      render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);
  
      const link = await screen.findByText("pikashu");
      fireEvent.click(link);
  
      expect(navigateMock).toHaveBeenCalledTimes(1);
    });
});