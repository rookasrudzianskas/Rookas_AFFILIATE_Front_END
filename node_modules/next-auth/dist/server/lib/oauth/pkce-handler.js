"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCallback = handleCallback;
exports.handleSignin = handleSignin;
exports.default = void 0;

var _pkceChallenge = _interopRequireDefault(require("pkce-challenge"));

var cookie = _interopRequireWildcard(require("../cookie"));

var _jwt = _interopRequireDefault(require("../../../lib/jwt"));

var _logger = _interopRequireDefault(require("../../../lib/logger"));

var _errors = require("../../../lib/errors");

const PKCE_LENGTH = 64;
const PKCE_CODE_CHALLENGE_METHOD = 'S256';
const PKCE_MAX_AGE = 60 * 15;

async function handleCallback(req, res) {
  const {
    cookies,
    provider,
    baseUrl,
    basePath
  } = req.options;

  try {
    var _provider$protection;

    if (!((_provider$protection = provider.protection) !== null && _provider$protection !== void 0 && _provider$protection.includes('pkce'))) {
      return;
    }

    if (!(cookies.pkceCodeVerifier.name in req.cookies)) {
      throw new _errors.OAuthCallbackError('The code_verifier cookie was not found.');
    }

    const pkce = await _jwt.default.decode({ ...req.options.jwt,
      token: req.cookies[cookies.pkceCodeVerifier.name],
      maxAge: PKCE_MAX_AGE,
      encryption: true
    });
    req.options.pkce = pkce;

    _logger.default.debug('OAUTH_CALLBACK_PROTECTION', 'Read PKCE verifier from cookie', {
      code_verifier: pkce.code_verifier,
      pkceLength: PKCE_LENGTH,
      method: PKCE_CODE_CHALLENGE_METHOD
    });

    cookie.set(res, cookies.pkceCodeVerifier.name, null, {
      maxAge: 0
    });
  } catch (error) {
    _logger.default.error('CALLBACK_OAUTH_ERROR', error);

    return res.redirect(`${baseUrl}${basePath}/error?error=OAuthCallback`);
  }
}

async function handleSignin(req, res) {
  const {
    cookies,
    provider,
    baseUrl,
    basePath
  } = req.options;

  try {
    var _provider$protection2;

    if (!((_provider$protection2 = provider.protection) !== null && _provider$protection2 !== void 0 && _provider$protection2.includes('pkce'))) {
      return;
    }

    const pkce = (0, _pkceChallenge.default)(PKCE_LENGTH);

    _logger.default.debug('OAUTH_SIGNIN_PROTECTION', 'Created PKCE challenge/verifier', { ...pkce,
      pkceLength: PKCE_LENGTH,
      method: PKCE_CODE_CHALLENGE_METHOD
    });

    provider.authorizationParams = { ...provider.authorizationParams,
      code_challenge: pkce.code_challenge,
      code_challenge_method: PKCE_CODE_CHALLENGE_METHOD
    };
    const encryptedCodeVerifier = await _jwt.default.encode({ ...req.options.jwt,
      maxAge: PKCE_MAX_AGE,
      token: {
        code_verifier: pkce.code_verifier
      },
      encryption: true
    });
    const cookieExpires = new Date();
    cookieExpires.setTime(cookieExpires.getTime() + PKCE_MAX_AGE * 1000);
    cookie.set(res, cookies.pkceCodeVerifier.name, encryptedCodeVerifier, {
      expires: cookieExpires.toISOString(),
      ...cookies.pkceCodeVerifier.options
    });

    _logger.default.debug('OAUTH_SIGNIN_PROTECTION', 'Created PKCE code_verifier saved in cookie');
  } catch (error) {
    _logger.default.error('SIGNIN_OAUTH_ERROR', error);

    return res.redirect(`${baseUrl}${basePath}/error?error=OAuthSignin`);
  }
}

var _default = {
  handleSignin,
  handleCallback
};
exports.default = _default;