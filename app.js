var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var publicIp = require('public-ip');
var myPublicIp;


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));



/* GET home page. */
app.get('/*', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});



function getPublicIp() {

  publicIp.v4().then(ip => {
    console.log(ip);
    myPublicIp = ip;
  });

}

getPublicIp();

module.exports = app;
