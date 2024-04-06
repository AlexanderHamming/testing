describe("Title Tests", () => {
	beforeEach(() => {
	  cy.visit("/");
	});

	it("Can search for matrix and get x search hits.", () => {

	  cy.get(".form-control").clear().type("matrix").type("{enter}");
      cy.get(".card").should("exist");
      cy.get(".card").should("have.length.at.least", 5);

	});

	it("Displays loading spinner while searching", () => {

		cy.get(".form-control").clear().type("matrix").type("{enter}");
        cy.get(".my-5").should("exist");

	});

	it("Can click on the first search result and land on the correct movie page", () => {

		cy.get(".form-control").clear().type("matrix").type("{enter}");
		cy.get(".card").first().click();
        cy.window().then(wind => {

		  setTimeout(() => {
			cy.url().should("include", "/movies/");
            cy.url().should("include", "/tt0133093");
		  }, 2500);
		});
	  });

  });
