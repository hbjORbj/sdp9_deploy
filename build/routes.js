"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var ABOUT = "/about";
var CONTACT = "/contact";
var USERS = "/users";
var USER_DETAIL = "/:id";
var LANDS = "/lands";
var ADD_LAND = "/addLand";
var LAND_DETAIL = "/:id";
var START_SURVEY = "/:id/startSurvey";
var DELETE_LAND = "/:id/delete";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  about: ABOUT,
  contact: CONTACT,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) return "/users/".concat(id);else return USER_DETAIL;
  },
  lands: LANDS,
  startSurvey: function startSurvey(id) {
    if (id) {
      return "/lands/".concat(id, "/startSurvey");
    } else {
      return START_SURVEY;
    }
  },
  addLand: ADD_LAND,
  landDetail: function landDetail(id) {
    if (id) return "/lands/".concat(id);else return LAND_DETAIL;
  },
  deleteLand: function deleteLand(id) {
    if (id) {
      return "/lands/".concat(id, "/delete");
    } else {
      return DELETE_LAND;
    }
  }
};
var _default = routes;
exports["default"] = _default;