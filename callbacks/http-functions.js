// while https is built-in to Node, it is a module, so it must be required

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path


module.exports = function getHTML (options, callback) {
  var https = require('https');

    https.get(options, function (response) {
      response.setEncoding('utf8');
      
      var result = "";
      response.on('data', function (data) {
        result +=data;
      })
      response.on('end', function() {
        callback(result);
      });
    })
}
