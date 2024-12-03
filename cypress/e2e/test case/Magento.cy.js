describe("test case secnario",()=>{
    it("magento login",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.panel > .header > .authorization-link > a').click()
       
    })
})