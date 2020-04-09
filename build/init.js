"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

require("@babel/polyfill");

require("./db");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _middlewares = require("./middlewares");

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _landRouter = _interopRequireDefault(require("./routers/landRouter"));

require("./models/Land");

require("./models/Comment");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 8080;
app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views"));
app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/static", _express["default"]["static"]("static"));
app.use(_middlewares.middleware);
app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].users, _userRouter["default"]);
app.use(_routes["default"].lands, _landRouter["default"]);
app.use(_express["default"]["static"](__dirname + "/public"));

var handleListening = function handleListening() {
  console.log("\u2705 Listening on http://localhost:".concat(PORT));
};

app.listen(PORT, handleListening);