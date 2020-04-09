"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteLand = exports.landDetail = exports.startSurvey = exports.postAddLand = exports.getAddLand = exports.userDetail = exports.users = exports.getLogin = exports.getJoin = exports.getContact = exports.getAbout = exports.home = void 0;

var _Land = _interopRequireDefault(require("./models/Land"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var lands;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Land["default"].find({}).sort({
              _id: -1
            });

          case 3:
            lands = _context.sent;
            res.render("home", {
              pageTitle: "Home",
              lands: lands
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.render("home", {
              pageTitle: "Home",
              lands: []
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.home = home;

var getAbout = function getAbout(req, res) {
  return res.render("about", {
    pageTitle: "About"
  });
};

exports.getAbout = getAbout;

var getContact = function getContact(req, res) {
  return res.render("contact", {
    pageTitle: "Contact"
  });
};

exports.getContact = getContact;

var getJoin = function getJoin(req, res) {
  return res.render("join", {
    pageTitle: "Join"
  });
};

exports.getJoin = getJoin;

var getLogin = function getLogin(req, res) {
  return res.render("login", {
    pageTitle: "Login"
  });
};

exports.getLogin = getLogin;

var users = function users(req, res) {
  return res.render("users", {
    pageTitle: "Users"
  });
};

exports.users = users;

var userDetail = function userDetail(req, res) {
  return res.render("userDetail", {
    pageTitle: "User Detail"
  });
};

exports.userDetail = userDetail;

var getAddLand = function getAddLand(req, res) {
  return res.render("addLand", {
    pageTitle: "Add Land"
  });
};

exports.getAddLand = getAddLand;

var postAddLand = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, pointALong, pointALat, pointBLong, pointBLat, userCO, userMoist, userPH, newLand;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, pointALong = _req$body.pointALong, pointALat = _req$body.pointALat, pointBLong = _req$body.pointBLong, pointBLat = _req$body.pointBLat, userCO = _req$body.userCO, userMoist = _req$body.userMoist, userPH = _req$body.userPH;
            _context2.next = 3;
            return _Land["default"].create({
              name: name,
              pointALong: pointALong,
              pointALat: pointALat,
              pointBLong: pointBLong,
              pointBLat: pointBLat,
              userCO: userCO,
              userMoist: userMoist,
              userPH: userPH,
              surveyCO: "0",
              surveyMoist: "0",
              surveyPH: "0",
              accumulatedCO: 0,
              accumulatedMoist: 0,
              accumulatedPH: 0,
              numberOfSurveys: 0,
              surveyDate: "Surveying hasn't been done yet"
            });

          case 3:
            newLand = _context2.sent;
            res.redirect(_routes["default"].landDetail(newLand.id));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postAddLand(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postAddLand = postAddLand;

var startSurvey = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, coValues, moistValues, phValues, coValue, moistValue, phValue, prevLand, land;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            coValues = ["3.5", "4.5", "5.5", "6.0", "7.0", "8.5", "9.0"];
            moistValues = ["65", "70", "75", "80", "85", "90", "95"];
            phValues = ["5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0"];
            coValue = coValues[coValues.length * Math.random() | 0];
            moistValue = moistValues[moistValues.length * Math.random() | 0];
            phValue = phValues[phValues.length * Math.random() | 0]; // var COReadings = [[],[]];
            // var PHReadings = [[],[]];
            // var moistReadings = [[],[]];
            // for (i = 0; i < 2; i++) {
            //   for (j = 0; j < 4; j++) {
            //     COReadings[i].push(coValues[(coValues.length * Math.random()) | 0]);
            //     PHReadings[i].push(phValues[(coValues.length * Math.random()) | 0]);
            //     moistReadings[i].push(moistValues[(moistValues.length * Math.random()) | 0]);
            //   }
            // }
            // const coValue = COReadings.reduce((previous, current) => current += previous) / COReadings.length;
            // const moistValue = PHReadings.reduce((previous, current) => current += previous) / PHReadings.length;
            // const phValue = moistReadings.reduce((previous, current) => current += previous) / moistReadings.length;

            _context3.next = 10;
            return _Land["default"].findById(id);

          case 10:
            prevLand = _context3.sent;
            _context3.next = 13;
            return _Land["default"].findOneAndUpdate({
              _id: id
            }, {
              surveyCO: coValue,
              surveyMoist: moistValue,
              surveyPH: phValue,
              accumulatedCO: prevLand.accumulatedCO + Number(coValue),
              accumulatedMoist: prevLand.accumulatedMoist + Number(moistValue),
              accumulatedPH: prevLand.accumulatedPH + Number(phValue),
              numberOfSurveys: prevLand.numberOfSurveys + 1,
              surveyDate: new Date().toLocaleString()
            }, {
              "new": true
            });

          case 13:
            land = _context3.sent;
            res.render("landDetail", {
              pageTitle: land.name,
              name: land.name,
              pointALong: land.pointALong,
              pointALat: land.pointALat,
              pointBLong: land.pointBLong,
              pointBLat: land.pointBLat,
              userCO: land.userCO,
              userMoist: land.userMoist,
              userPH: land.userPH,
              surveyCO: land.surveyCO,
              surveyMoist: land.surveyMoist,
              surveyPH: land.surveyPH,
              accumulatedCO: land.accumulatedCO,
              accumulatedMoist: land.accumulatedMoist,
              accumulatedPH: land.accumulatedPH,
              surveyDate: land.surveyDate,
              numberOfSurveys: land.numberOfSurveys,
              land: land
            });
            _context3.next = 21;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.redirect(_routes["default"].home);

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 17]]);
  }));

  return function startSurvey(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.startSurvey = startSurvey;

var landDetail = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, land;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Land["default"].findById(id);

          case 4:
            land = _context4.sent;
            res.render("landDetail", {
              pageTitle: land.name,
              name: land.name,
              pointALong: land.pointALong,
              pointALat: land.pointALat,
              pointBLong: land.pointBLong,
              pointBLat: land.pointBLat,
              userCO: land.userCO,
              userMoist: land.userMoist,
              userPH: land.userPH,
              surveyCO: land.surveyCO,
              surveyMoist: land.surveyMoist,
              surveyPH: land.surveyPH,
              accumulatedCO: land.accumulatedCO,
              accumulatedMoist: land.accumulatedMoist,
              accumulatedPH: land.accumulatedPH,
              surveyDate: land.surveyDate,
              numberOfSurveys: land.numberOfSurveys,
              land: land
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.redirect(_routes["default"].home);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function landDetail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.landDetail = landDetail;

var deleteLand = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Land["default"].findOneAndRemove({
              _id: id
            });

          case 4:
            res.redirect(_routes["default"].home);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            res.redirect(_routes["default"].home);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function deleteLand(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteLand = deleteLand;