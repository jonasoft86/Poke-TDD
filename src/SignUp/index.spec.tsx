import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./index";

const navigateMock = vi.fn();

describe("Test component SignUp", () => {

  vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        },
    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("Deve tener un input para e-mail", async () => {
      render(<SignUp />);
  
      const inputName = await screen.findByPlaceholderText("Ingrese su nombre");
      const inputEmail = await screen.findByPlaceholderText("Ingrese su email");
      const inputPassword = await screen.findByPlaceholderText(
        "Ingrese su contraseña"
      );

      expect(inputName).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();

  });

  test("Debe tener un boton en pantalla", async () => {
      render(<SignUp />);

      const button = await screen.findByRole("button");

      expect(button).toHaveTextContent('Sign Up');
  });

  test("Debe tener un titulo Registro", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 2
    });

    expect(title).toHaveTextContent('Registro');
  });

  test("Debe navegar a pagina dashboard", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Debe tener un link para ir a la pagina de login", async () => {
    render(<SignUp />);

    const link = screen.getByText("Iniciar cesion Click aqui!");

    expect(link).toBeInTheDocument();
  });

});