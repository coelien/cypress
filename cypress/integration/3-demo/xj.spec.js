// xj.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('open xjtu website',()=>{
    var text = 'Cypress';
    it('I search the text by baidu', function () {
        cy.visit('http://www.baidu.com')
        cy.url().should("contains", "baidu")
        cy.get('input.s_ipt').type('西安交通大学');
        cy.get('#kw').should('have.value', '西安交通大学')
        cy.get('input#su').click()
    })

    it('open website',()=>{
        cy.visit('http://www.xjtu.edu.cn')
    })

    it('should click success with xpath',()=>{
        cy.contains("院系设置").click()
        cy.contains("电信学部").click()
        cy.get('a').contains("软件学院").click()
        cy.url().should("contain","1030")

    })
})