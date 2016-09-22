"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var paginateArray = function paginateArray(collection) {
  var page = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  var numItems = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

  if (!Array.isArray(collection)) {
    throw "Expect array and got " + (typeof collection === "undefined" ? "undefined" : _typeof(collection));
  }
  var currentPage = parseInt(page);
  var perPage = parseInt(numItems);
  var offset = (page - 1) * perPage;
  var paginatedItems = collection.slice(offset, offset + perPage);

  return {
    currentPage: currentPage,
    perPage: perPage,
    total: collection.length,
    totaPages: Math.ceil(collection.length / perPage),
    data: paginatedItems
  };
};

exports.default = paginateArray;