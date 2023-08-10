/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainer<Subject> {
    /**
     * Custom Chai assertion that checks that the response status message is equal to given message
     * @example
     * ```
     * cy.request('/users').should('have.statusMessage', 'OK');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.have.statusMessage('OK');
     * });
     * ```
     * */
    (chainer: 'have.statusMessage', message: string): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to given status code
     *
     * @example
     ```
    cy.request('/users').should('have.status', 200);
    or
    cy.request('/users').should((response) => {
       expect(response).to.have.status(200);
    });
    ```
    * */
    (chainer: 'have.status'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 200
     * @example
     * ```
     * cy.request('/users').should('be.successful');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.successful;
     * });
     * ```
     * */
    (chainer: 'be.successful'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 201
     * @example
     * ```
     * cy.request('/users').should('be.created');
     * or
     * cy.request('/users').should((response) => {
     *   expect(response).to.be.created;
     * });
     * ```
     * */
    (chainer: 'be.created'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code to be OK
     * @example
     * ```
     * cy.request('/users').should('be.ok');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.ok;
     * });
     * ```
     * */
    (chainer: 'be.ok'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 204
     * @example
     * ```
     * cy.request('/users').should('be.noContent');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.noContent;
     * });
     * ```
     * */
    (chainer: 'be.noContent'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 400
     * @example
     * ```
     * cy.request('/users').should('be.badRequest');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.badRequest;
     * });
     * ```
     * */
    (chainer: 'be.badRequest'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 401
     * @example
     * ```
     * cy.request('/users').should('be.unauthorized');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.unauthorized;
     * });
     * ```
     * */
    (chainer: 'be.unauthorized'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 403
     * @example
     * ```
     * cy.request('/users').should('be.forbidden');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.forbidden;
     * });
     * ```
     * */
    (chainer: 'be.forbidden'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 404
     * @example
     * ```
     * cy.request('/users').should('be.notFound');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.notFound;
     * });
     * ```
     * */
    (chainer: 'be.notFound'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code to be client error
     * @example
     * ```
     * cy.request('/users').should('be.clientError');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.clientError;
     * });
     * ```
     * */
    (chainer: 'be.clientError'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 500
     * @example
     * ```
     * cy.request('/users').should('be.serverError');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.serverError;
     * });
     * ```
     * */
    (chainer: 'be.serverError'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 501
     * @example
     * ```
     * cy.request('/users').should('be.notImplemented');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.notImplemented;
     * });
     * ```
     * */
    (chainer: 'be.notImplemented'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 502
     * @example
     * ```
     * cy.request('/users').should('be.badGateway');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.badGateway;
     * });
     * ```
     * */
    (chainer: 'be.badGateway'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code is equal to 503
     * @example
     * ```
     * cy.request('/users').should('be.serviceUnavailable');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.serviceUnavailable;
     * });
     * ```
     * */
    (chainer: 'be.serviceUnavailable'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code to be server error
     * @example
     * ```
     * cy.request('/users').should('be.serverError');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.serverError;
     * });
     * ```
     * */
    (chainer: 'be.serverError'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response status code to be OK
     * @example
     * ```
     * cy.request('/users').should('be.ok');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.ok;
     * });
     * ```
     * */
    (chainer: 'be.ok'): Chainable<Subject>;

    /**
     *  Custom Chai assertion that checks that the response body is equal to JSON body
     * @example
     * ```
     * cy.request('/users').should('have.body', { name: 'Jane' });
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.have.body({ name: 'Jane' });
     * });
     * ```
     * */
    (chainer: 'have.body', json: any): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body is equal to JSON body
     * @example
     * ```
     * cy.request('/users').should('haveBody', { name: 'Jane' });
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.haveBody({ name: 'Jane' });
     * });
     * ```
     * */
    (chainer: 'haveBody', json: any): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body is equal to JSON body
     * @example
     * ```
     * cy.request('/users').should('haveJson', { name: 'Jane' });
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.haveJson({ name: 'Jane' });
     * });
     * ```
     * */
    (chainer: 'haveJson', json: any): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body contains JSON body
     * @example
     * ```
     * cy.request('/users').should('containBody', { name: 'Jane' });
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.containBody({ name: 'Jane' });
     * });
     * ```
     * */
    (chainer: 'containBody', json: any): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body contains JSON body
     * @example
     * ```
     * cy.request('/users').should('containJson', { name: 'Jane' });
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.containJson({ name: 'Jane' });
     * });
     * ```
     * */
    (chainer: 'containJson', json: any): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body is equal to text
     * @example
     * ```
     * cy.request('/users').should('haveText', 'Jane');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.haveText('Jane');
     * });
     * ```
     * */
    (chainer: 'haveText', text: string): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response body contains text
     * @example
     * ```
     * cy.request('/users').should('containText', 'Jane');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.containText('Jane');
     * });
     * ```
     * */
    (chainer: 'containText', text: string): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response header is equal to given header
     * @example
     * ```
     * cy.request('/users').should('have.header', 'content-type', 'application/json');
     * cy.request('/users').should('have.header', 'content-type');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.have.header('content-type', 'application/json');
     * });
     * ```
     * */
    (chainer: 'have.header', header: string, value?: string): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response content type is equal to given content type
     * @example
     * ```
     * cy.request('/users').should('have.contentType', 'application/json');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.have.contentType('application/json');
     * });
     * ```
     * */
    (chainer: 'have.contentType', contentType: string): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response content type is equal to JSON content type
     * @example
     * ```
     * cy.request('/users').should('be.json');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.json;
     * });
     * ```
     * */
    (chainer: 'be.json'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response content type is equal to HTML content type
     * @example
     * ```
     * cy.request('/users').should('be.html');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.html;
     * });
     * ```
     * */
    (chainer: 'be.html'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response content type is equal to XML content type
     * @example
     * ```
     * cy.request('/users').should('be.xml');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.be.xml;
     * });
     * ```
     * */
    (chainer: 'be.xml'): Chainable<Subject>;

    /**
     * Custom Chai assertion that checks that the response cookies contain given cookie
     * @example
     * ```
     * cy.request('/users').should('have.cookie', 'session_id');
     * cy.request('/users').should('have.cookie', 'session_id', '1234');
     * or
     * cy.request('/users').should((response) => {
     *  expect(response).to.have.cookie('session_id');
     *  expect(response).to.have.cookie('session_id', '1234');
     * });
     * ```
     * */
    (chainer: 'have.cookie', cookie: string, value?: string): Chainable<Subject>;
  }
}
