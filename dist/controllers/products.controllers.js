"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.deleteProduct = exports.createProduct = exports.getOneProduct = exports.getAllProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Products = _interopRequireDefault(require("../models/Products"));

var _getPagination2 = require("../libs/getPagination");

var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, _getPagination, limit, offset, products;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$query = req.query, size = _req$query.size, page = _req$query.page;
            _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
            _context.next = 5;
            return _Products["default"].paginate({}, {
              offset: offset,
              limit: limit
            });

          case 5:
            products = _context.sent;
            res.json(products);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: _context.t0.message || "Something goes wrong retrieving the products"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllProducts = getAllProducts;

var getOneProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Products["default"].findById(id);

          case 4:
            product = _context2.sent;
            console.log(product);
            if (!product) res.status(404).json({
              message: "Task  width id ".concat(req.params.id, " does not exist")
            });
            res.json(product);
            return _context2.abrupt("return");

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: _context2.t0.message || "Error Reatrieving Product with id: ".concat(id)
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function getOneProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOneProduct = getOneProduct;

var createProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var newProduct, productSaved;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (req.body.name) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", res.status(400).send({
              message: "content cannot be empty"
            }));

          case 2:
            _context3.prev = 2;
            newProduct = new _Products["default"]({
              name: req.body.name,
              brand: req.body.brand,
              img: req.body.img,
              type: req.body.type,
              "class": req.body["class"],
              product: req.body.product,
              description: req.body.description,
              price: req.body.price
            });
            _context3.next = 6;
            return newProduct.save();

          case 6:
            productSaved = _context3.sent;
            res.json(productSaved);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            res.status(500).json({
              message: _context3.t0.message || "Something goes wrong creating a product"
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));

  return function createProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Products["default"].findByIdAndDelete(id);

          case 4:
            res.json({
              message: "Product were deleted successfully"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            res.status(500).json({
              message: _context4.t0.message || "Cannot delete product with id: ".concat(id)
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Products["default"].findByIdAndUpdate(req.params.id, req.body);

          case 2:
            res.json({
              message: "Product was updated Succesfully"
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;