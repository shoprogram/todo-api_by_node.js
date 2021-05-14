var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var v1router = require('./routes/api/v1');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1', v1router);

app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res, next) {
  res.send('accuses ok');
})

const server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
module.exports = app;
