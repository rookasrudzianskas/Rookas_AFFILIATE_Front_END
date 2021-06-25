"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callbackUrlHandler;

var cookie = _interopRequireWildcard(require("../lib/cookie"));

async function callbackUrlHandler(req, res) {
  const {
    query
  } = req;
  const {
    body
  } = req;
  const {
    cookies,
    baseUrl,
    defaultCallbackUrl,
    callbacks
  } = req.options;
  let callbackUrl = defaultCallbackUrl || baseUrl;
  const callbackUrlParamValue = body.callbackUrl || query.callbackUrl || null;
  const callbackUrlCookieValue = req.cookies[cookies.callbackUrl.name] || null;

  if (callbackUrlParamValue) {
    callbackUrl = await callbacks.redirect(callbackUrlParamValue, baseUrl);
  } else if (callbackUrlCookieValue) {
    callbackUrl = await callbacks.redirect(callbackUrlCookieValue, baseUrl);
  }

  if (callbackUrl && callbackUrl !== callbackUrlCookieValue) {
    cookie.set(res, cookies.callbackUrl.name, callbackUrl, cookies.callbackUrl.options);
  }

  req.options.callbackUrl = callbackUrl;
}