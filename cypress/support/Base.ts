/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects selection
 */
import {data} from "../data";
import cy = Cypress.cy;

export class Base {
    /**
     * open a url
     * @param {string} path
     * @returns {*}
     */

    public static open(path) {
        return cy.visit(data.redirectURL + (path && path[0] === '/' ? '' : '/') + path);
    }

    /**
     * Gets an attribute of an element
     * @param selector
     * @param {string} path
     */
    public static select(
        selector: string,
        parent? : Cypress.Chainable,
    ): Promise<Cypress.Chainable> {
        let element;
        if (selector) {
            element = cy.get(selector);
        return element;
    }
}

    /**
     * Clicks on an element
     * @param selector
     * @param parent An optional parent for selecting the click target.
     * @param waitForDisplayed Toggle to disable wait for logic of the click target.
     * @param catchErrors Toggle to disable error catching in this method. By default all errors are caught :(
     */

    public static async click(
        selector: string,
        catchErrors = true
    ): Promise<void> {
        const target =  Base.select(selector,undefined).then( el => {
            return target.click();
        })
        try {

        } catch (e) {
            // just for stabilizing
            // no error handling here as this wait selector does not work for every element and there is no
            // useful error message so just skip it in error case :P
            // logger.error(`An error occurred during Base.click method: ${e}`);
            if (!catchErrors) {
                throw e;
            }
        }
        target.click();
    }

    /**
     * Returns if an element which match the selector and parent is displayed in the dom
     * @param selector
     * @param parent
     */
    public static async isDisplayed (
        selector: string,
        parent?: Cypress.Chainable
    ): Promise<boolean> {
        // @ts-ignore
        return (await Base.select(selector, parent)).should('be.visible');
    }

    /**
     * set a value into an element
     * @param value
     * @param selector
     * @returns {*}
     */
    public static setValue(
        value: string,
        selector: string,
        parent?: Cypress.Chainable
    ): Promise<Cypress.Chainable> {
        this.click(selector);
        // @ts-ignore
        return ((Base.select(selector, parent))).type(value);
    }
}