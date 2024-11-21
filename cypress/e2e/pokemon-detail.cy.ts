describe("Test pagina de detalles de pokemon", () => {
    it("Debe renderizar un pokemon en nuestra pantalla", () => {
      cy.visit("/pokemon-detail/1");

      cy.intercept("GET", "http://localhost:3000/pokemon/1", {
        fixture: "pokemon-detail.json",
      });
  
      cy.contains("Pikachu");
      cy.get("img").should(
        "have.attr",
        "src",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      );

      cy.get("div")
      .find("div")
      .should(($div) => {
        expect($div).to.have.length(2);

        const className = $div[0].className;
        expect(className).to.match(/container/);
      })
      .then(($div) => {
        expect($div).to.have.css("display", "flex");
      });
  
    });
});