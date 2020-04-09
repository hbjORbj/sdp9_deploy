"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get("/", _controllers.home);
globalRouter.get(_routes["default"].join, _controllers.getJoin);
globalRouter.get(_routes["default"].login, _controllers.getLogin);
globalRouter.get(_routes["default"].about, _controllers.getAbout);
globalRouter.get(_routes["default"].contact, _controllers.getContact);
var _default = globalRouter;
exports["default"] = _default;