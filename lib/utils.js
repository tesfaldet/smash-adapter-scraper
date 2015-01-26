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
  },
  parseConfigFile: function(configFile, debug, callback) {
    iniparser.parse(configFile, function(err, data) {
      var errMsg;

      errMsg  = 'An error occured while trying to read the config file: ' + configFile;
      errMsg += '\nPlease make sure that file is readable. \n';
      errMsg += 'For more details run the program with the --debug flag.';

      if (err) {
        if (debug) {
          throw err;
        } else {
          utils.exit(errMsg);
        }
      } else {
        if (!data.credentials || !data.credentials.accessKeyId || !data.credentials.secretAccessKey) {
          errMsg  = "Missing configuration params from file " + configFile + "\n";
          errMsg += "Please make sure accessKeyId and secretAccessKey are present ";
          errMsg += "under the credentials section.";
          utils.exit(errMsg);
        } else {
          callback(data.credentials);
        }
      }
    });
  }
};

module.exports = utils;
