describe("Test pagina de Dashboard", () => {
    it("Deve cargar una lista con 3 pokemons", () => {
      cy.visit("/dashboard");
  
      cy.intercept("GET", "http://localhost:3000/pokemon", {
        fixture: "pokemons.json",
      });
  
      cy.contains("Pikachu");
      cy.contains("Rotom");
      cy.contains("Charmander");
    });

    it("Cuando hago click en un pokemon debe abrir a pagina de detalles", () => {
        cy.visit("/dashboard");
    
        cy.intercept("GET", "http://localhost:3000/pokemon", {
          fixture: "pokemons.json",
        });
    
        cy.intercept("GET", "http://localhost:3000/pokemon/1", {
          fixture: "pokemon-detail.json",
        });
    
        cy.contains("Pikachu").click();
        cy.contains("Volver");
    });

    it("Cuando hago click en un pokemon debe abrir a pagina de detalles y despues de volver debe listar 3 pokemons", () => {
        cy.visit("/dashboard");
    
        cy.intercept("GET", "http://localhost:3000/pokemon", {
          fixture: "pokemons.json",
        });
    
        cy.intercept("GET", "http://localhost:3000/pokemon/1", {
          fixture: "pokemon-detail.json",
        });
    
        cy.contains("Pikachu").click();
        cy.contains("Volver").click();
    
        cy.contains("Pikachu");
        cy.contains("Rotom");
        cy.contains("Charmander");
    });

    it("Cuando hago click en un pokemon debe abrir a pagina de detalles y despues de volver debe listar 3 pokemons", () => {
        cy.visit("/dashboard");
    
        cy.intercept("GET", "http://localhost:3000/pokemon", {
          fixture: "pokemons.json",
        });
    
        cy.get("div").find("ul").should("have.css", "display").and("match", /grid/);
    });

    it("Debe haber 3 pokemons en la pantalla con li's", () => {
        cy.visit("/dashboard");
    
        cy.intercept("GET", "http://localhost:3000/pokemon", {
          fixture: "pokemons.json",
        });
    
        cy.get("div")
          .find("li")
          .should(($li) => {
            expect($li).to.have.length(3);
    
            const pikachu = $li[0];
            const rotom = $li[1];
            const charmander = $li[2];
    
            expect(pikachu.textContent).to.contain("Pikachu");
            expect(rotom.textContent).to.contain("Rotom");
            expect(charmander.textContent).to.contain("Charmander");
          });
    });
})
  