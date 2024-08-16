class HomePage {
    selectorList(){
        const selectors = {
            speakGeneric: "[aria-label='Falar com responsável']",
        }
        return selectors
    }


    accessHomePage(){
        cy.visit('/home')
    }

    // speakToPersonInCharge(){
    //     cy.contains('Yoda').parentsUntil('a').find(this.selectorList().speakGeneric).click();
    // }

}
export default HomePage