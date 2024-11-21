import { render, screen } from "@testing-library/react";
import PokemonDetail from ".";
import { fetchPokemonDetail } from "../services/PokemonService";
import { faker } from "@faker-js/faker";
import * as rrd from "react-router-dom";

const mockFn = vi.fn(fetchPokemonDetail);
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
  return {
    id: 1,
    image: faker.image.urlPlaceholder(),
    name: "Pikashu",
    type: "Eletrico",
  };
});


describe("Test component PokemonDetail", () => {

    vi.mock("react-router-dom", () => {
        return {
            useParams: () => ({
            id: 1,
            }),
            Link: vi.fn().mockImplementation((props) => props.children),
        };
    });

    test("Debe tener un título de pagina", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

        const Pikashu = await screen.findByText("Pikashu");
        expect(Pikashu).toBeInTheDocument();
    });

    test("Debe tener un link para volver", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);
    
        const linkBack = await screen.findByText("Volver");
        expect(linkBack).toBeInTheDocument();
    });

    test("Debe tener un id no valido cuando no corresponde la ruta", async () => {
        vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "0" }));
    
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);
    
        const errorText = await screen.findByText("id no valido!");
        expect(errorText).toBeInTheDocument();
    });
});