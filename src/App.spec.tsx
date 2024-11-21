import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test component App", () => {
  test("Debe tener un titulo escrito 'Hello World'", async () => {
    render(<App />);

    const title = await screen.findByRole("heading", {
      name: "Hello World",
    });

    expect(title).toBeInTheDocument();
  });
});