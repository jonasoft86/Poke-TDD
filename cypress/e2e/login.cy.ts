describe('Test Page Login', () => {

  it("Cuando hago  click en login debe ir para a pagina de Dashboard", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Login").click();
    cy.contains("Dashboard");
  });

  it("Cuando hago  click en login debe ir para a pagina de Dashboard y tener un pokemon pikashu", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });
    
    cy.contains("Login").click();
    cy.contains("Dashboard");
    cy.contains("Pikachu");
  });

  it("Cuando click en Sign Up debe ir para a página de Registro", () => {
    cy.visit("/");

    cy.contains("Registrarse Click aqui!").click();
    cy.contains("Registro");
  });
})