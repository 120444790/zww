"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(buyAmountGenerators);

function buy(name, cb) {
  setTimeout(function () {
    cb && cb(null, 'content:' + name);
  }, 5);
}

function buyPromise(name) {
  return new Promise(function (resolve, reject) {
    buy(name, function (err, content) {
      if (err) {
        reject();
      }

      resolve(content);
    });
  });
}

function buyAmountGenerators() {
  var caiContent, paomianContent, shuanghuanglianContent;
  return regeneratorRuntime.wrap(function buyAmountGenerators$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return buyPromise('cai');

        case 2:
          caiContent = _context.sent;
          _context.next = 5;
          return buyPromise('paomian' + caiContent);

        case 5:
          paomianContent = _context.sent;
          _context.next = 8;
          return buyPromise('shuanghuanglian' + paomianContent);

        case 8:
          shuanghuanglianContent = _context.sent;
          return _context.abrupt("return", shuanghuanglianContent);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var handler = buyAmountGenerators();
handler.next().value.then(function (content) {
  handler.next(content).value.then(function (content) {
    handler.next(content).value.then(function (shuanghuanglianContent) {
      console.log('shuanghuanglianContent:', shuanghuanglianContent);
    });
  });
});