var BadBehavior = (function () {
  'use strict';

  function BadBehavior() {
      var buffer = [];
      var subs = [];
      return {
          next: function (n) {
              if (subs.length) {
                  if (!buffer.length) {
                      do {
                          subs.forEach(function (s) {
                              s(n);
                          });
                          n = buffer.shift();
                      } while (n != null);
                  }
                  else {
                      buffer.push(n);
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
