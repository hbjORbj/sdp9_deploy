"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = void 0;

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = function middleware(req, res, next) {
  res.locals.routes = _routes["default"];
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

exports.middleware = middleware;