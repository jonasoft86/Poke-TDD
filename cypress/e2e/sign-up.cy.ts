describe("Test pagina de Sign Up", () => {

    it("Cuando click en Registro debe ir para a pagina de Login", () => {
        cy.visit("/sign-up");
    
        cy.contains("Iniciar cesion Click aqui!").click();
        cy.contains("Login");
    });
  

  });