"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var app = (0, _express["default"])(); //settings

app.set("port", process.env.PORT || 3000); //middlewares
//Request from Any Server

app.use((0, _cors["default"])()); //Morgan

app.use((0, _morgan["default"])("dev")); //Interpretar JSON

app.use(_express["default"].json()); //Interpretar Html

app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.get("/", function (req, res) {
  res.json({
    message: "welcome"
  });
});
app.use("/api/products", _products["default"]);
var _default = app;
exports["default"] = _default;