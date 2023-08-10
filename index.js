/* eslint-disable no-undef */
chai.config.truncateThreshold = 300;

chai.use(({ Assertion }) => {
  const assert = (value) => new chai.Assertion(value);

  const assertions = new Map([
    [
      ['header', 'haveHeader'],
      function toHaveHeader(expectedHeader, expectedValue) {
        const lowerCaseHeader = expectedHeader.toLowerCase();
        const actualHeaders = this._obj.headers;

        assert(actualHeaders).to.have.property(expectedHeader);

        if (expectedValue) {
          assert(actualHeaders[lowerCaseHeader]).to.eq(expectedValue);
        }
      },
    ],
    [
      'contentType',
      function toHaveContentType(expectedContentType) {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq(expectedContentType);
      },
    ],
    [
      ['status', 'statusCode', 'haveStatusCode'],
      function toHaveStatusCode(expectedStatusCode) {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(expectedStatusCode);
      },
    ],
    [
      'statusMessage',
      function toHaveStatusMessage(expectedStatusCode) {
        const actualStatusCode = this._obj.statusText;
        assert(actualStatusCode).to.eq(expectedStatusCode);
      },
    ],
    [
      'successful',
      function toBeSuccessful() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(200);
      },
    ],
    [
      'created',
      function toBeCreated() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(201);
      },
    ],
    [
      'noContent',
      function toBeEmpty() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(204);
      },
    ],
    [
      'badRequest',
      function toBeBadRequest() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(400);
      },
    ],
    [
      'unauthorized',
      function toBeUnauthorized() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(401);
      },
    ],
    [
      'forbidden',
      function toBeForbidden() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(403);
      },
    ],
    [
      'notFound',
      function toBeNotFound() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(404);
      },
    ],

    [
      'internalError',
      function toBeInternalError() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(500);
      },
    ],
    [
      'notImplemented',
      function toBeNotImplemented() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(501);
      },
    ],
    [
      'badGateway',
      function toBeBadGateway() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(502);
      },
    ],
    [
      'serviceUnavailable',
      function toBeServiceUnavailable() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.eq(503);
      },
    ],
    [
      'ok',
      function toBeOk() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.be.oneOf([200, 201]);
      },
    ],
    [
      'redirected',
      function toBeRedirected() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.be.oneOf([301, 302]);
      },
    ],
    [
      'clientError',
      function toBeClientError() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.be.oneOf([400, 401, 403, 404]);
      },
    ],
    [
      'serverError',
      function toBeServerError() {
        const actualStatusCode = this._obj.status;
        assert(actualStatusCode).to.be.oneOf([500, 501, 502, 503, 504]);
      },
    ],
    [
      ['body', 'haveBody', 'haveJson'],
      function haveBody(expectedBody) {
        const actualBody = this._obj.body;
        assert(actualBody).to.deep.eq(expectedBody);
      },
    ],
    [
      'haveText',
      function haveText(expectedText) {
        const actualText = this._obj.body;
        assert(actualText).to.eq(expectedText);
      },
    ],
    [
      'containText',
      function containText(expectedText) {
        const actualText = this._obj.body;
        assert(actualText).to.include(expectedText);
      },
    ],
    [
      ['containBody', 'containJson'],
      function containBody(expectedBody) {
        const actualBody = this._obj.body;
        assert(actualBody).to.deep.include(expectedBody);
      },
    ],
    [
      ['cookie', 'haveCookie'],
      function haveCookie(expectedCookieName, expectedCookieValue) {
        const actualCookies = this._obj.headers['set-cookie'][0];
        const cookiesArray = actualCookies.split('; ');

        const cookies = {};
        cookiesArray.forEach((cookie) => {
          const [name, value] = cookie.split('=');
          cookies[name] = value;
        });

        const actualCookieValue = cookies[expectedCookieName];

        assert(cookies).to.have.property(expectedCookieName);

        if (expectedCookieValue) {
          assert(actualCookieValue).to.eq(expectedCookieValue);
        }
      },
    ],
    [
      'json',
      function toBeJson() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('application/json');
      },
    ],
    [
      'html',
      function toBeHtml() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('text/html');
      },
    ],
    [
      'javascript',
      function toBeJavascript() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('application/javascript');
      },
    ],
    [
      'css',
      function toBeCss() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('text/css');
      },
    ],
    [
      'image',
      function toBeImage() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('image/png');
      },
    ],
    [
      'xml',
      function toBeXml() {
        const actualContentType = this._obj.headers['content-type'];
        assert(actualContentType).to.eq('application/xml');
      },
    ],
  ]);

  assertions.forEach((assertionFn, names) => {
    if (Array.isArray(names)) {
      names.forEach((name) => Assertion.addMethod(name, assertionFn));
    } else {
      Assertion.addMethod(names, assertionFn);
    }
  });
});
