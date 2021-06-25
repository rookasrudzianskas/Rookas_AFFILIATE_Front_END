"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signout;

var cookie = _interopRequireWildcard(require("../lib/cookie"));

var _dispatchEvent = _interopRequireDefault(require("../lib/dispatch-event"));

var _errorHandler = _interopRequireDefault(require("../../adapters/error-handler"));

async function signout(req, res) {
  const {
    adapter,
    cookies,
    events,
    jwt,
    callbackUrl,
    logger
  } = req.options;
  const useJwtSession = req.options.session.jwt;
  const sessionToken = req.cookies[cookies.sessionToken.name];

  if (useJwtSession) {
    try {
      const decodedJwt = await jwt.decode({ ...jwt,
        token: sessionToken
      });
      await (0, _dispatchEvent.default)(events.signOut, decodedJwt);
    } catch (error) {}
  } else {
    const {
      getSession,
      deleteSession
    } = (0, _errorHandler.default)(await adapter.getAdapter(req.options), logger);

    try {
      const session = await getSession(sessionToken);
      await (0, _dispatchEvent.default)(events.signOut, session);
    } catch (error) {}

    try {
      await deleteSession(sessionToken);
    } catch (error) {
      logger.error("SIGNOUT_ERROR", error);
    }
  }

  cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
    maxAge: 0
  });
  return res.redirect(callbackUrl);
}