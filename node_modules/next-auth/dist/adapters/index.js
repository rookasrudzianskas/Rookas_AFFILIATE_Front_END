"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prisma = exports.TypeORM = exports.default = void 0;

var TypeORM = _interopRequireWildcard(require("./typeorm"));

exports.TypeORM = TypeORM;

var Prisma = _interopRequireWildcard(require("./prisma"));

exports.Prisma = Prisma;
var _default = {
  Default: TypeORM.Adapter,
  TypeORM,
  Prisma
};
exports.default = _default;