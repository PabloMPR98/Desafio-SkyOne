

describe("Validation" , () => {

    it("skyone" , () => {
    
    cy.visit("https://skyone.solutions/")
    
    Cypress.on('uncaught:exception', (err, runnable) => {
                
        return false
      })
    
    
      cy.get('.hamburger-menu').click()
    
      cy.get('.menu-mobile > :nth-child(2) > a').click()
    
      cy.title().should("be.equal" , "Cases - Sky.One")
    
      /// neste momento estou na url https://skyone.solutions/cases/  porem não consigo fazer com que o menu segmentos desça para eu acessar contabilidade
    
      ///dado este fato, continuarei o case a partir da url https://skyone.solutions/cases/?segmento=contabilidade
    
    
    
    
    
    })
    
    
    it("WebSiteValidation" , () => {
    
        cy.visit("https://skyone.solutions/cases/?segmento=contabilidade")
        
        cy.url().should("eq", 'https://skyone.solutions/cases/?segmento=contabilidade')
        cy.title().should("be.equal" , "Cases - Sky.One")
    })
    
    
    
    
    
    
    
    
    
    })