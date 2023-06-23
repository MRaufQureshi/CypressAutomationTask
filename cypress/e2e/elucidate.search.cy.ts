import SearchPageSelectors from '../objects/SearchPageSelectors'

describe('Automation Testing Online tests', () => {
    describe('Automation Testing Search box', () => {

    beforeEach(()=>{
        cy.visit('https://monitor.elucidate.co/')
        cy.get(SearchPageSelectors.cookieDialogs.cookieBot).click()
    })

    it('should verify that the search box is present on the page and is visible to the user.', () => {
        cy.get(SearchPageSelectors.SearchBar).should('be.visible')
    })
        
})
    describe('Automation Testing Search results', () => {
        beforeEach(()=>{
            cy.visit('https://monitor.elucidate.co/')
            cy.get(SearchPageSelectors.cookieDialogs.cookieBot).click()
        })
        
        it('should verfiy that the search box accepts input from the user.',() => {
            cy.get(SearchPageSelectors.SearchTextField).type('Test')
        })

        it('should verify that the search results are relevant to the search query.'), () => {
            cy.get(SearchPageSelectors.SearchTextField).type('Test').then(() => {
                cy.get('[id="result-item-0"]')
                    .first().should('have.text', 'BANCA MALA')
            })
        }

        it('should verify that the search results are displayed correctly on the page.'), () => {

        }
        it('should verify that the search results are sorted correctly.'), () => {

        }
        it('should verify that the search results are displayed correctly when no results are found.'), () => {

        }
        
    })
    describe('Automation Testing Search functionality', () => {

        beforeEach(()=>{
            cy.visit('https://monitor.elucidate.co/')
            cy.get(SearchPageSelectors.cookieDialogs.cookieBot).click()
        })

        it('should verify that the search functionality works correctly when multiple search terms are used.',() => {})
        it('should verify that the search functionality works correctly when special characters are used in the search query.',() => {})
        it('should verify that the search functionality works correctly when the search query is empty.',() => {})
        it('should test the search functionality by entering a valid search term and verifying that the correct results are displayed.',() => {})
        it('should test the search functionality by entering an invalid search term and verifying that no results are displayed.',() => {})
        it('should test the search functionality by entering a search term with multiple words and verifying that the correct results are displayed.',() => {})
        it('should test the search functionality by entering a search term with special characters and verifying that the correct results displayed.',() => {})
        it('should check that the search functionality works as expected when no results are found.',() => {})
    })
})