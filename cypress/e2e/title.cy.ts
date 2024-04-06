describe("Title Tests", () => {
	beforeEach(() => {

	  cy.visit("/");
	});

	it("should verify page title", () => {
		cy.title().should("include", "Mostly Mundane Movies");
	  });

	it("Can't search without a title", () => {
		cy.get(".form-control").clear().type("{enter}");
		cy.get(".fade").should("be.visible");
		cy.get(".fade").should("contain","Aww, that's cute");
		cy.get(".fade").should("contain", "You tried to search, good for you! 👀");
	});



	it("It can't search if if it's less than 3 characters", () => {
		cy.get(".form-control").clear().type("he").type("{enter}")
		cy.get(".fade").should("be.visible");
		cy.get(".fade").should("contain","Wow, that was stupid");
		cy.get(".fade").should("contain", "Search query must be at least 3 characters long, duh ^^ 🙄");
	});


  });
