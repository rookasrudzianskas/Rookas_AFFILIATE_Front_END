"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = csrfTokenHandler;

var _crypto = require("crypto");

var cookie = _interopRequireWildcard(require("./cookie"));

function csrfTokenHandler(req, res) {
  const {
    cookies,
    secret
  } = req.options;

  if (cookies.csrfToken.name in req.cookies) {
    const [csrfToken, csrfTokenHash] = req.cookies[cookies.csrfToken.name].split('|');
    const expectedCsrfTokenHash = (0, _crypto.createHash)('sha256').update(`${csrfToken}${secret}`).digest('hex');

    if (csrfTokenHash === expectedCsrfTokenHash) {
      const csrfTokenVerified = req.method === 'POST' && csrfToken === req.body.csrfToken;
      req.options.csrfToken = csrfToken;
      req.options.csrfTokenVerified = csrfTokenVerified;
      return;
    }
  }

  const csrfToken = (0, _crypto.randomBytes)(32).toString('hex');
  const csrfTokenHash = (0, _crypto.createHash)('sha256').update(`${csrfToken}${secret}`).digest('hex');
  const csrfTokenCookie = `${csrfToken}|${csrfTokenHash}`;
  cookie.set(res, cookies.csrfToken.name, csrfTokenCookie, cookies.csrfToken.options);
  req.options.csrfToken = csrfToken;
}