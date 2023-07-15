
/// reference types="cypress" />

describe('Validação do site', () => {


    it("ConsultaGoogle", () => {
      cy.visit('https://www.google.com.br/')
  
      cy.url().should("eq", 'https://www.google.com.br/')
    
      cy.get('#APjFqb')
      .type("sky one solutions")
      .should("have.value" , "sky one solutions")

      cy.get('.FPdoLc > center > .gNO89b').click({force:true})

      cy.get('.tF2Cxc > .yuRUbf > a > .TbwUpd > :nth-child(2) > .VuuXrf').click()


      cy.on('uncaught:exception', (e) => {
    
      if (e.message.includes('Things went bad')) {
       
      return false
       }
    
     })

    })

    it("ValidacaoPG" , () => {

        cy.visit("https://www.skyone.solutions/")

        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
          })

        cy.title().should("be.equal" , "Sky.One Solutions - Plataformas para a evolução digital do seu negócio")
    })

    
      
  })



  


