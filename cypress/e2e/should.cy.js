describe('assertions', () => {
  it('should have status', () => cy.request('/demo').should('have.status', 200));
  it('should have status code', () => cy.request('/demo').should('have.statusCode', 200));
  it('should have status message', () => cy.request('/demo').should('have.statusMessage', 'OK'));
  it('should be successful', () => cy.request('/demo').should('be.successful'));
  it('should be created', () => cy.request('/201').should('be.created'));
  it('should be noContent', () => cy.request('/204').should('be.noContent'));
  it('should be ok', () => cy.request('/demo').should('be.ok'));
  it('should be badRequest', () => cy.request({ url: '/400', failOnStatusCode: false }).should('be.badRequest'));
  it('should be unauthorized', () => cy.request({ url: '/401', failOnStatusCode: false }).should('be.unauthorized'));
  it('should be forbidden', () => cy.request({ url: '/403', failOnStatusCode: false }).should('be.forbidden'));
  it('should be notFound', () => cy.request({ url: '/404', failOnStatusCode: false }).should('be.notFound'));
  it('should be clientError', () => cy.request({ url: '/404', failOnStatusCode: false }).should('be.clientError'));
  it('should be internalError', () => cy.request({ url: '/500', failOnStatusCode: false }).should('be.internalError'));
  it('should be notImplemented', () => cy.request({ url: '/501', failOnStatusCode: false }).should('be.notImplemented'));
  it('should be badGateway', () => cy.request({ url: '/502', failOnStatusCode: false }).should('be.badGateway'));
  it('should be serviceUnavailable', () =>
    cy.request({ url: '/503', failOnStatusCode: false }).should('be.serviceUnavailable'));
  it('should be serverError', () => cy.request({ url: '/500', failOnStatusCode: false }).should('be.serverError'));
  it('should have body', () => cy.request('/data/object').should('have.body', { name: 'John', age: 30 }));
  it('should containBody', () => cy.request('/data/object').should('containBody', { name: 'John' }));
  it('should have header key', () => cy.request('/demo').should('have.header', 'content-type'));
  it('should have header key & value', () => cy.request('/demo').should('have.header', 'content-type', 'text/html'));
  it('should have content type', () => cy.request('/demo').should('have.contentType', 'text/html'));
  it('should be text', () => cy.request('/text').should('be.text'));
  it('should be html', () => cy.request('/demo').should('be.html'));
  it('should be json', () => cy.request('/data/object').should('be.json'));
  it('should be xml', () => cy.request('/xml').should('be.xml'));
  it('should verify chaining', () => {
    cy.request('/data/object')
      .should('have.status', 200)
      .and('have.statusMessage', 'OK')
      .and('be.json')
      .and('have.body', { name: 'John', age: 30 });
  });
  it('should verify expect', () => {
    cy.request('/data/object').should((response) => {
      expect(response).to.have.status(200);
      expect(response).to.have.statusMessage('OK');
      expect(response).to.be.json;
      expect(response).to.have.body({ name: 'John', age: 30 });
    });
  });
});
