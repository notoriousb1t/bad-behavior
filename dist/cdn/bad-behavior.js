var BadBehavior = (function () {
  'use strict';

  function BadBehavior() {
      var buffer = [];
      var counter = 0;
      var subs = [];
      return {
          next: function (n) {
              if (subs.length) {
                  if (counter++) {
                      buffer.push(n);
                  }
                  else {
                      do {
                          subs.forEach(function (s) {
                              s(n);
                          });
                          n = buffer.shift();
                      } while (--counter);
                  }
              }
          },
          subscribe: function (fn) {
              subs = subs.concat(fn);
              return {
                  unsubscribe: function () {
                      subs = subs.filter(function (s) { return s !== fn; });
                  }
              };
          }
      };
  }

  return BadBehavior;

}());
