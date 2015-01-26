var fmt       = require('fmt'),
    iniparser = require('iniparser'),
    utils;

utils = {
  debugBlock: function(title, dumpObj) {
    fmt.sep();
    fmt.title(title);
    fmt.sep();
    fmt.msg('');
    fmt.dump(dumpObj);
    fmt.msg('');
    fmt.line();
  },
  print: function(message) {
    fmt.msg(message);
  },
  exit: function(errMsg) {
    console.error(errMsg);
    process.exit(1);
  }
};

module.exports = utils;
