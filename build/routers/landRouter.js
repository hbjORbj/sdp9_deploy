"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _controllers = require("../controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var landRouter = _express["default"].Router();

landRouter.get(_routes["default"].addLand, _controllers.getAddLand);
landRouter.post(_routes["default"].addLand, _controllers.postAddLand);
landRouter.get(_routes["default"].startSurvey(), _controllers.startSurvey);
landRouter.get(_routes["default"].landDetail(), _controllers.landDetail);
landRouter.get(_routes["default"].deleteLand(), _controllers.deleteLand);
var _default = landRouter;
exports["default"] = _default;