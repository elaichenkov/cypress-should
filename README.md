[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://vshymanskyy.github.io/StandWithUkraine)

# cypress-should
---
[![tests](https://github.com/elaichenkov/cypress-should/actions/workflows/tests.yml/badge.svg)](https://github.com/elaichenkov/cypress-should/actions/workflows/tests.yml)
[![NPM version](https://img.shields.io/npm/v/cypress-should.svg?style=flat&color=red)](https://www.npmjs.com/package/cypress-should)
[![monthly downloads](https://img.shields.io/npm/dm/cypress-should.svg?style=flat&color=orange&label=monthly%20downloads)](https://www.npmjs.com/package/cypress-should)
[![downloads all time](https://img.shields.io/npm/dt/cypress-should.svg?style=flat&color=yellow&label=lifetime%20downloads)](https://www.npmjs.com/package/cypress-should)
[![commits](https://img.shields.io/github/commit-activity/y/elaichenkov/cypress-should.svg?style=flat&color=purple)](https://github.com/elaichenkov/cypress-should/commits/main)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat&color=blue)](LICENSE)

> Supercool assertion library for Cypress to verify API responses

## Install

```bash
npm install --save-dev cypress-should
```

## Usage

In your `cypress/support/index.js` file, add the following:

```javascript
require('cypress-should');
```

or if you are using TypeScript:

```typescript
import 'cypress-should';
```

Then in your tests, you can use the `should` command with custom assertions to verify the response:

```javascript
cy.request('/api/users')
  .should('have.status', 200)
  .and('have.statusMessage', 'OK')
  .and('have.contentType', 'application/json')
  .and('have.body', { name: 'John Doe' });
```

or

```javascript
cy.request('/api/users').should((response) => {
  expect(response).to.have.status(200);
  expect(response).to.have.statusMessage('OK');
  expect(response).to.haveContentType('application/json');
  expect(response).to.have.body({ name: 'John Doe' });
});
```

## API

`have.status` - Asserts the response status code

```javascript
cy.request('/api/users').should('have.status', 200)
```

`have.statusMessage` - Asserts the response status message

```javascript
cy.request('/api/users').should('have.statusMessage', 'OK')
```

`have.contentType` - Asserts the response content type

```javascript
cy.request('/api/users').should('have.contentType', 'application/json')
```

`have.body` - Asserts the response body

```javascript
cy.request('/api/users').should('have.body', { name: 'John Doe' })
```

`have.header` - Asserts the response header

```javascript
cy.request('/api/users').should('have.header', 'x-powered-by', 'Express')
```

`have.cookie` - Asserts the response cookie

```javascript
cy.request('/profile').should('have.cookie', 'session_id')
```

`containBody` - Asserts the response body contains the given value

```javascript
cy.request('/api/users').should('containBody', { name: 'John Doe' });
```

`haveText` - Asserts the response body is equal to the given text

```javascript
cy.request('/home').should('haveText', 'Hello World!');
```

`containText` - Asserts the response body contains the given text

```javascript
cy.request('/home').should('containText', 'World!');
```

`be.json` - Asserts the response body is a valid JSON

```javascript
cy.request('/api/users').should('be.json');
```

`be.html` - Asserts the response body is a valid HTML

```javascript
cy.request('/home').should('be.html');
```

`be.text` - Asserts the response body is a valid text

```javascript
cy.request('/home').should('be.text');
```

`be.xml` - Asserts the response body is a valid XML

```javascript
cy.request('/home').should('be.xml');
```

## License

MIT

## Author

Yevhen Laichenkov <elaichenkov@gmail.com>