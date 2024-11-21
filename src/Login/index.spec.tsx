import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./index";

const navigateMock = vi.fn();

describe("Test component Login", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        },
    Link: vi.fn().mockImplementation((props) => props.children),
    }));

    test("Deve tener un título escrito 'Sign In'", async () => {
        render(<Login />);
    
        const title = await screen.findByRole("heading", {
          name: "Sign In",
        });
    
        expect(title).toBeInTheDocument();
    });

    test("Debe tener dos inputs en pantalla", async () => {
        render(<Login />);
    
        const inputs = await screen.findAllByRole("textbox");
    
        expect(inputs).toHaveLength(2);
    });
    
    test("Deve tener un input para e-mail", async () => {
        render(<Login />);
    
        const inputEmail = await screen.findByPlaceholderText("Ingrese su email");
    
        expect(inputEmail).toBeInTheDocument();
    });

    test("Debe tener un input para contraseña", async () => {
        render(<Login />);
    
        const inputPassword = await screen.findByPlaceholderText(
          "Ingrese su contraseña"
        );
    
        expect(inputPassword).toBeInTheDocument();
    });

    test("Debe tener un input para enviar datos", async () => {
        render(<Login />);
    
        const button = await screen.findByRole("button");
        fireEvent.click(button);
    
        expect(navigateMock).toHaveBeenCalledTimes(1);
    });

    test("Debe tener un link para ir a la pagina de Registro", async () => {
        render(<Login />);
    
        const link = screen.getByText("Registrarse Click aqui!");
    
        expect(link).toBeInTheDocument();
    });
});