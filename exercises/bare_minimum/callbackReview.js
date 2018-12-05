/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    } else {
      return callback(err, data.split('\n')[0]);
    }
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  // TODO
  request(url, (err, response, body) => {
    if (err) {
      return callback(err);
    } else {
      return callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
