// You would normally:
//
//    npm install -S elm-serverless
//
// and then require it like this:
//
//    const elmServerless = require('elm-serverless');
//
// but this demo is nested in the `elm-serverless` repo, so we just
// require it relative to the current module's location
//
const elmServerless = require('..');

const elm = require('./API.elm');

module.exports.handler = elmServerless.httpApi({
  // Your elm app is the handler
  handler: elm.API,

  // Config is a record type that you define.
  // You will also provide a JSON decoder for this.
  // It should be deployment data that is constant, perhaps loaded from
  // an environment variable.
  config: {
    something: 'testing config loader',
  },

  // Because elm libraries cannot expose ports, you have to define them.
  // Whatever you call them, you have to provide the names.
  // The meanings are obvious. A connection comes in through the requestPort,
  // and the response is sent back through the responsePort.
  requestPort: 'requestPort',
  responsePort: 'responsePort',
});